import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


const Weather = (props) => {
    return(
        <div className="container" style={{opacity: 0.8}}>
            <div className="card py-4">
    <h1 data-testid="location" >{props.location}</h1>
                <h5 className="py-4">
                    <FontAwesomeIcon size="6x" icon={faSun} />
                </h5>
                <h1 data-testid="temp" className="py-2">{props.temp}&deg;</h1>
                <h4 data-testid="precip" className="py-3">{props.precip}</h4>
            </div>
        </div>
    )
}


export default Weather;