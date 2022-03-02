import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Weather = (props) => {
  return (
    <div className="container" style={{ opacity: 0.8, marginTop: 3 }}>
      <div className="card py-4">
        {props.loading ? showSpinner() : showContent(props)}
      </div>
    </div>
  );
};

function showContent(props) {
  return (
    <div>
      <h1 data-testid="location">{props.location}</h1>
      <h5 className="py-4">
        <FontAwesomeIcon size="6x" icon={props.icon} />
      </h5>
      <h1 data-testid="temp" className="py-2">
        {props.temp}&deg;C
      </h1>
      <h4 data-testid="precip" className="py-3">
        {props.precip}
      </h4>
    </div>
  );
}

function showSpinner() {
  return (
    <div className="py-5">
      <div className="spinner-border" role="status"></div>
    </div>
  );
}

export default Weather;