import React from "react";

export default function Alert(props) {
  if (props.alert) {
    return (
      <div
        className={`alert alert-${
          props.alert.type === "success"
            ? props.alert.type
            : props.alert.type === "warning"
            ? props.alert.type
            : "danger"
        } alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type.toUpperCase()}</strong>: {props.alert.msg}
      </div>
    );
  }
}
