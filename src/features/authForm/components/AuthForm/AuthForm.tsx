import { ReactNode, useState } from 'react'
import ApiService from '../../../../shared/api/apiService.ts'

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.create('/auth/register', {
        email,
        password,
        role,
      });
      // if (response.status === 201) {
      //   setMessage('Registration successful!');
      //   // TODO Перенаправляем на главную страницу после успешной регистрации
      // }
    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService('/auth/login', {
        email,
        password,
      });
      if (response.data.access_token) {
        // localStorage.setItem('access_token', response.data.access_token);
        setMessage('Login successful!');
        // Перенаправляем на главную страницу после успешного входа
      }
    } catch (error) {
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AuthForm;
