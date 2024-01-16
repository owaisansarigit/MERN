import React from "react";
import { Link } from "react-router-dom";

const Navbaar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link " aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link " aria-current="page" to="/myorder">
                My Order
              </Link>
            </div>
            <div class="navbar-nav ms-auto">
              <Link class="nav-link " aria-current="page" to="/login">
                Login
              </Link>
              <Link class="nav-link " aria-current="page" to="/register">
                Register
              </Link>
              <Link class="nav-link " aria-current="page" to="/cart">
                Cart
              </Link>
              <Link class="nav-link " aria-current="page" to="/logout">
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
