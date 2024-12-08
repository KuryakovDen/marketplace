import { useState } from 'react'
import { authService } from '../../services/authService.ts'
import { UserCredentials, UserRole } from '../../../../shared/types/api/apiTypes.ts'

function AuthForm() {
  const [registerCredentials, setRegisterCredentials] = useState<UserCredentials>({
    email: '', password: '', role: 'CLIENT'
  })

  const [loginCredentials, setLoginCredentials] = useState<UserCredentials>({
    email: '', password: '', role: 'CLIENT'
  })

  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(registerCredentials)
      if (response.status === 201) {
        // TODO Перенаправляем на главную страницу после успешной регистрации
      }
    } catch (error) {
      // TODO Сделать единую обработку ошибок
      setMessage('Registration failed: ' + error.response.data.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = authService.login(loginCredentials)
      if (response.data.access_token) {
        // TODO Перенаправляем на главную страницу после успешной авторизации
      }
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
