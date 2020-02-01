import React from "react";
import "./custom-button.component.scss";

const CustomButton = ({
  children,
  isSignInWithGoogle,
  inverted,
  ...othersProps
}) => {
  return (
    <button
      className={`
      ${inverted ? "inverted" : ""} ${
        isSignInWithGoogle ? "google-sign-in" : ""
      } custom-button`}
      {...othersProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
