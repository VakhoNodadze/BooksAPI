import React from "react";

const Like = props => {
  let classes = "";
  if (!props.isFavourite) {
    classes = "far";
  }
  // else {
  //   classes = "fas";
  // }
  if (props.isFavourite) {
    classes = "fas";
  }
  return (
    <div>
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={`${classes} fa-heart`}
      />
    </div>
  );
};

export default Like;
