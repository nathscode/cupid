import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="not-found">
          <h1>404</h1>
          <p>Page not found</p>
          <Link to="/" className="button button-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
};
export default NotFoundPage;
