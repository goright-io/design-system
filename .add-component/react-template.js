module.exports = (name) => `
import React from "react";

/* ${name}
 *
 * TODO: add component description
 */
const ${name} = ({children}) => {
  return <div className="">{children}</div>;
};

export default ${name};
`;
