import React from "react";
import "../css/LoginScreen.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../images/login-back.webp";
import icono from "../images/icon-nav.png";

const LoginScreen = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center p-0">
      <div className="row w-100 no-gutters h-100">
        {/* Columna del formulario */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-5 bg-white login-column h-100">
          <div className="login-form">
            <h3 className="text-center mb-4">BIENVENIDO A</h3>
            <h2 className="text-center mb-1 logo-mibar">
              <img src={icono} alt="Icono del bar" className="logo-icon" />
              MI BAR
            </h2>
            <h2 className="text-center mb-2 logo-mibar">SISTEMA ONLINE</h2>
            <p className="text-center mb-4">
              El sistema ideal para administrar tu negocio gastronómico.
            </p>
            <form className="d-flex flex-column align-items-center">
              <div className="form-group position-relative w-100 d-flex justify-content-center">
                <input
                  type="text"
                  id="username"
                  className="form-control floating-input"
                  placeholder=" "
                />
                <label htmlFor="username" className="floating-label">
                  <FaEnvelope className="input-icon" /> Email
                </label>
              </div>
              <div className="form-group position-relative mt-4 w-100 d-flex justify-content-center">
                <input
                  type="password"
                  id="password"
                  className="form-control floating-input"
                  placeholder=" "
                />
                <label htmlFor="password" className="floating-label">
                  <FaLock className="input-icon" /> Clave
                </label>
              </div>
              <button type="submit" className="btn btn-signin mt-4">
                INICIAR SESIÓN
              </button>
            </form>

            <p className="text-center mt-4">
              No tienes cuenta?{" "}
              <a href="#" className="sign-up">
                Registrate Ahora
              </a>
            </p>
            <p className="text-center">O inicia sesión con </p>
            <div className="social-icons d-flex justify-content-center mt-3">
              <a href="#" className="fs-2">
                <FcGoogle />
              </a>
            </div>
          </div>
        </div>

        {/* Columna de la imagen */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center p-0 h-100">
          <div className="image-overlay">
            <img src={loginImage} alt="Login" className="login-image" />
            <div className="overlay-content">
              <h2>MI BAR SISTEMA ONLINE</h2>
              <p>
                Nuestro sistema en línea está diseñado para facilitar la gestión
                integral de tu negocio gastronómico. Permite a los clientes
                explorar el menú digitalmente, a los mozos tomar pedidos de
                manera eficiente y a la cocina recibir y gestionar estos pedidos
                en tiempo real. Además, como dueño tendras acceso a un panel de
                control completo para supervisar todas las operaciones y obtener
                una visión clara de lo que sucede en el negocio. Optimiza tus
                procesos y mejora la experiencia de tus clientes con nuestra
                solución todo en uno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
