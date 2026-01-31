import { useState } from 'react';
import './Login.css';
import { login, register } from './services/authService';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await login(formData.email, formData.password);
      } else {
        response = await register(formData);
      }

      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
          role: response.role
        }));


        window.location.href = '/';
      } else {
        setError(response.message || 'An error occurred');
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card card border-0 shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: '450px' }}>
        <div className="login-header text-center mb-4">
          <h1 className="fw-bold mb-2">SpeedShine</h1>
          <p className="text-secondary mb-0">{isLogin ? 'Welcome back!' : 'Create your account'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form d-flex flex-column gap-3">
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label fw-medium text-dark">First Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label fw-medium text-dark">Last Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label fw-medium text-dark">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label fw-medium text-dark">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              minLength={isLogin ? undefined : 6}
            />
          </div>

          {error && <div className="alert alert-danger p-2 mb-0 border-0">{error}</div>}

          <button type="submit" className="submit-button btn w-100 mt-2" disabled={loading}>
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="login-footer text-center mt-3">
          <p className="text-secondary small mb-0">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="toggle-button btn btn-link p-0 text-decoration-underline align-baseline"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({
                  email: '',
                  password: '',
                  firstName: '',
                  lastName: ''
                });
              }}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
