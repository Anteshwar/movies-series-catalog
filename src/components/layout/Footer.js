import React from "react";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
          Developed By:
          <span className="text-warning font-weight-normal">
            Anteshwar Tondare
          </span>
          , Using <i className="fab fa-react" /> React Js &amp; Redux JS
          integrated with external movies data API
          <a href="http://www.omdbapi.com" target="blank" rel="noopener noreferrer">
            OMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
