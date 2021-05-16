import React from "react";

/* SideBySide
 *
 * Two columns to display content side by side
 */
const SideBySide = ({ children }) => {
  return (
    <div className="grid w-full h-full grid-cols-2 overflow-auto gap-x-10">
      {children}
    </div>
  );
};

export default SideBySide;
