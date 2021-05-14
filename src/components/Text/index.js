import React from "react";

/* Text
 *
 * TODO: add component description
 */
const Text = ({ variant, children }) => {
  return (
    <p
      className={`block w-full text-${variant} font-${variant} tracking-${variant} leading-${variant}`}
    >
      {children}
    </p>
  );
};

export default Text;
