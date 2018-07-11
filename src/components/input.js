import React from "react";

const Input = (Title, state, onChange, name) => {
  return (
    <div className="input">
      <input name={name} value={state} onChange={onChange} />
      <label>{Title}</label>
    </div>
  );
};

export default Input;
