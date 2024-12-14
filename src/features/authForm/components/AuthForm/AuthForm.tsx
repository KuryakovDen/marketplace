import { useState } from 'react'
import { authService } from '../../services/authService.ts'
import { RegisterCredentials, LoginCredentials, UserRole } from '../../../../shared/types/api/apiTypes.ts'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../../../shared/consts/appRoutes.ts'
import { CookiesStorage } from '../../../../shared/browserStorage/cookieStorage/cookieStorage.ts'
import Ajv from 'ajv'
import { registerSchema } from '../../consts/registerSchema.ts'
import { loginSchema } from '../../consts/loginSchema.ts'
import { isValidEmail } from '../../../../shared/utils/isValidEmail.ts'

const ajv = new Ajv();
ajv.addFormat('email', {
  type: 'string',
  validate: (email) => isValidEmail(email as string),
});

function AuthForm() {
  const navigate = useNavigate();
  const cookiesStorage = new CookiesStorage();

  const [registerCredentials, setRegisterCredentials] = useState<RegisterCredentials>({
    email: '', password: '', role: 'CLIENT'
  })

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: '', password: ''
  })

  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const validate = ajv.compile(registerSchema);
    const valid = validate(registerCredentials);

    if (!valid) {
      setMessage('Registration failed: ' + validate.errors?.map(err => err.message).join(', '));
      return;
    }

    try {
      const { message } = await authService.register(registerCredentials)
      console.log(message)
      // TODO Показывать сообщение об успешной регистрации
      navigate(AppRoute.Main)
    } catch (error) {
      // TODO Сделать единую обработку ошибок
      setMessage('Registration failed: ' + error.response.data.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validate = ajv.compile(loginSchema);
    const valid = validate(loginCredentials);

    if (!valid) {
      setMessage('Login failed: ' + validate.errors?.map(err => err.message).join(', '));
      return;
    }

    try {
      // TODO Сделать адаптер для полей бэкенда с snake_case
      const { accessToken } = await authService.login(loginCredentials)
      cookiesStorage.set('accessToken', accessToken)
      // TODO Показывать сообщение об успешной авторизации
      navigate(AppRoute.Main)
    } catch (error) {
      // TODO Сделать единую обработку ошибок
      setMessage('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={registerCredentials.email}
          onChange={(e) => setRegisterCredentials({...registerCredentials, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={registerCredentials.password}
          onChange={(e) => setRegisterCredentials({...registerCredentials, password: e.target.value})}
          required
        />
        <select
          value={registerCredentials.role}
          onChange={(e) => setRegisterCredentials({...registerCredentials, role: e.target.value as UserRole})}>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginCredentials.email}
          onChange={(e) => setLoginCredentials({...loginCredentials, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginCredentials.password}
          onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AuthForm;
