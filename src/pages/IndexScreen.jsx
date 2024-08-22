import React from "react";
import "../css/IndexScreen.css";
import adminImage from "../images/admin.jpg";
import kitchenImage from "../images/kitchen3.jpg";
import waiterImage from "../images/waiter.jpg";
import clientImage from "../images/client.jpg";

const IndexScreen = () => {
  let userRole = localStorage.getItem("userRole");

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-between"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className= {`${
            userRole === "client" ? "h-100" : "row flex-grow-1"
          }`}>
        {/* Admin Panel - Visible only to Admin */}
        <div
          className={`col-lg-3 col-md-6 col-12 m-0 p-0 border-0 ${
            userRole !== "admin" ? "d-none" : ""
          }`}
        >
          <div
            className={`card h-100 border-0 custom-card ${
              userRole === "admin" ? "admin-card" : ""
            }`}
          >
            <img src={adminImage} className="card-img-top" alt="Admin" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">PANEL ADMIN</h5>
            </div>
          </div>
        </div>

        {/* Kitchen Panel - Visible to Admin and Kitchen */}
        <div
          className={`${
            userRole === "waiter" || userRole === "client"
              ? "d-none"
              : userRole === "kitchen"
              ? "col-lg-4 col-md-12 col-12"
              : "col-lg-3 col-md-6 col-12"
          } m-0 p-0 border-0 custom-card`}
        >
          <div
            className={`card h-100 border-0 custom-card ${
              userRole === "admin" ? "admin-card" : "kitchen-card"
            }`}
          >
            <img src={kitchenImage} className="card-img-top" alt="Kitchen" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">PANEL DE COCINA</h5>
            </div>
          </div>
        </div>

        {/* Waiter Panel - Visible to Admin, Kitchen, and Waiter */}
        <div
          className={`${
            userRole === "client"
              ? "d-none"
              : userRole === "waiter"
              ? "col-lg-6 col-md-12 col-12"
              : userRole === "kitchen"
              ? "col-lg-4 col-md-12 col-12"
              : "col-lg-3 col-md-6 col-12"
          } m-0 p-0 border-0 custom-card`}
        >
          <div
            className={`card h-100 border-0 ${
              userRole === "admin"
                ? "admin-card"
                : userRole === "waiter"
                ? "waiter-card"
                : "kitchen-card"
            }`}
          >
            <img src={waiterImage} className="card-img-top" alt="Waiter" />
            <div className="custom-overlay">
              <h5 className="card-title m-0">PANEL DE MOZOS</h5>
            </div>
          </div>
        </div>

        {/* Client Panel - Visible to All */}
        <div
          className={`${
            userRole === "client"
              ? "col-lg-12 col-md-12 col-12"
              : userRole === "kitchen"
              ? "col-lg-4 col-md-12 col-12"
              : userRole === "waiter"
              ? "col-lg-6 col-md-12 col-12"
              : "col-lg-3 col-md-6 col-12"
          } m-0 p-0 border-0 custom-card`}
        >
          <div
            className={`card h-100 border-0 ${
              userRole === "admin"
                ? "admin-card"
                : userRole === "waiter"
                ? "waiter-card"
                : userRole === "kitchen"
                ? "kitchen-card"
                : "client-card"
            }`}
          >
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
