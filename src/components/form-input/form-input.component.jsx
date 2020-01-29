import React from "react";
import "./form-input.component.scss";

const FormInput = ({ handleChange, label,...othersProps }) => {


  return (
    <div className='group'>
      <input {...othersProps} className='form-input' onChange={handleChange} />
      {label ? (
        <label
          className={`${
            othersProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
