import React from "react";
import propType from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propType = {
    title: propType.string,
    about: propType.string
};
Navbar.defaultProps = {
    title: "Default Titile",
    about: "Default About"
};
