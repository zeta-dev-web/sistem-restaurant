import React from 'react';
import '../css/IndexScreen.css';
import adminImage from '../images/admin.jpg';
import kitchenImage from '../images/kitchen3.jpg';
import waiterImage from '../images/waiter.jpg';
import clientImage from '../images/client.jpg';

const IndexScreen = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="row flex-grow-1 sm-pantalla">
        <div className="col-lg-3 col-md-6 col-12 m-0 p-0 border-0">
          <div className="card h-100 border-0 custom-card">
            <img src={adminImage} className="card-img-top" alt="Admin" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">PANEL ADMIN</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 m-0 p-0 border-0">
          <div className="card h-100 border-0 custom-card">
            <img src={kitchenImage} className="card-img-top" alt="Kitchen" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">PANEL DE COCINA</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 m-0 p-0 border-0">
          <div className="card h-100 border-0 custom-card">
            <img src={waiterImage} className="card-img-top" alt="Waiter" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">PANEL DE MOZOS</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 m-0 p-0 border-0">
          <div className="card h-100 border-0 custom-card">
            <img src={clientImage} className="card-img-top" alt="Client" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">CARTA O MENU</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexScreen;
