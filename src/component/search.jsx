import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          name="city"
          placeholder="City"
        ></input>
        <button type="submit" className="btn btn-primary">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default Search;