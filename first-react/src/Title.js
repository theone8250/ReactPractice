import React from "react";

export default function Title(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: "orange", textAlign: "center" }}>
        {props.mainTitle}
      </h1>
    </div>
  );
}
