import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert ${
            props.alert.type ? `alert-${props.alert.type}` : ""
          }`}
          role="alert"
        >
          {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
