import React from "react";
import {  Link } from "react-router-dom";

const ErrorPage = () => {

  return (
        <div className="errorpage" >
            <h3 ><b>Sorry, this page isn't available</b></h3> <br></br>
            <h5>The link you followed may be broken, or the page may have been removed. Go back to <Link  to="/">Home Page.</Link></h5>
        </div>
  );
};

export default ErrorPage;
