module.exports = (name) => `
/* ${name}
 *
 * TODO: add component description
 */
const ${name} = ({children}) => {
  return <div className="">{children}</div>;
};

export default ${name};
`;
