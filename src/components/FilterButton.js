import React, { useState } from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visual-hide">show</span>
      <span>{props.name}</span>
      <span className="visual-hide">tasks</span>
    </button>
  );
}
export default FilterButton;
