import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import '../css/login.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
      setError('');
      onLogin();
    } else {
      setError('Use admin@gmail.com and password admin.');
    }
  };

  return (
    <div className="login-page">
      <Sidebar title="Admin Panel" subtitle="A simple login page for the admin user." />

      <main className="login-content">
        <div className="login-card">
          <h1>Admin Login</h1>
          <p className="intro">Sign in to view the student records.</p>

          <form className="login-form" onSubmit={onSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit">Login</button>
          </form>

          {error ? <p className="error">{error}</p> : null}
        </div>
      </main>
    </div>
  );
}

export default Login;