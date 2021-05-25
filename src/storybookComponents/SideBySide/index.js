import React from "react";

/* SideBySide
 *
 * Two columns to display content side by side
 */
const SideBySide = ({ children }) => {
  return (
    <div className="grid w-full h-full grid-cols-2 py-6 overflow-auto">
      {children}
    </div>
  );
};

export default SideBySide;
