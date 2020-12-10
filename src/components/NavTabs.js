import React from "react";

function NavTabs(props) {
  return (
    <ul className="navbar nav-tabs navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
      <div className="navbar-brand">Brenda Miller</div>
      <div className="navbar-header">
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
      <li className="navbar">

        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
          
        </a>       
      </li>
      <li className="navbar">

        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
     
      </li>
      <li className="navbar">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
       
      </li>
      <li className="navbar">
        <a
          href="#links"
          onClick={() => props.handlePageChange("Links")}
          className={props.currentPage === "Links" ? "nav-link active" : "nav-link"}
        >
          Links
        </a>
       
      </li>
      </div>
      </div>
      </div>
    </ul>
    
  );
}

export default NavTabs;
