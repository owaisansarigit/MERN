import React from "react";
import { Link } from "react-router-dom";

const Navbaar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link " aria-current="page" to="/myorder">
                My Order
              </Link>
            </div>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link " aria-current="page" to="/login">
                Login
              </Link>
              <Link className="nav-link " aria-current="page" to="/register">
                Register
              </Link>
              <Link className="nav-link " aria-current="page" to="/cart">
                Cart
              </Link>
              <Link className="nav-link " aria-current="page" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbaar;
