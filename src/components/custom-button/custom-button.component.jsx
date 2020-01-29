import React from "react";
import './custom-button.component.scss';

const CustomButton = ({ children, isSignInWithGoogle, ...othersProps }) => {
  return (
    <button
      className={`${isSignInWithGoogle? 'google-sign-in': ''} custom-button`}
      {...othersProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
