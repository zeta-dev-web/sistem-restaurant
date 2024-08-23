import React from 'react';
import '../css/LoginScreen.css'; 
import loginImage from '../images/login-back.webp';

const LoginScreen = () => {
  return (
    <div className="container-fluid h-100 d-flex align-items-center overflow-hidden p-0">
      <div className="row w-100 no-gutters h-100">
        {/* Columna de la imagen */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center p-0">
          <img src={loginImage} alt="Login" className="login-image" />
        </div>
        
        {/* Columna del formulario */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-4">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Enter password" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
