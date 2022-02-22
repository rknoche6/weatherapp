import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
    return(
        <div className="container">
            <div className="card">
                <h1>Berlin</h1>
                <h5 className="py-4">
                    <FontAwesomeIcon size="6x" icon={faSun} />
                </h5>
                <h1 className="py-2">25&deg;</h1>
                {minmaxTemp(20,60)}
                <h4 className="py-3">Heavy Rain</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min, max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )

}

export default Weather;