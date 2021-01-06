/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.setInc}>
        +
      </button>
      <button className="btn btn-danger" onClick={props.setDec}>
        -
      </button>
    </div>
  );
};
