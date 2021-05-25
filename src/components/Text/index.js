import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
/* Text
 *
 * Any text block
 */
const Text = ({ variant, children, as: Component = "p", className }) => {
  const variants = {
    "9Xl": "text-9Xl font-9Xl tracking-9Xl leading-9Xl",
    "8Xl": "text-8Xl font-8Xl tracking-8Xl leading-8Xl",
    "7Xl": "text-7Xl font-7Xl tracking-7Xl leading-7Xl",
    "6Xl": "text-6Xl font-6Xl tracking-6Xl leading-6Xl",
    "5Xl": "text-5Xl font-5Xl tracking-5Xl leading-5Xl",
    "4Xl": "text-4Xl font-4Xl tracking-4Xl leading-4Xl",
    "3Xl": "text-3Xl font-3Xl tracking-3Xl leading-3Xl",
    "2Xl": "text-2Xl font-2Xl tracking-2Xl leading-2Xl",
    xl: "text-xl font-xl tracking-xl leading-xl",
    xlBolder: "text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder",
    lg: "text-lg font-lg tracking-lg leading-lg",
    lgBolder: "text-lgBolder font-lgBolder tracking-lgBolder leading-lgBolder",
    base: "text-base font-base tracking-base leading-base",
    baseBolder:
      "text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder",
    sm: "text-sm font-sm tracking-sm leading-sm",
    smBolder: "text-smBolder font-smBolder tracking-smBolder leading-smBolder",
    xs: "text-xs font-xs tracking-xs leading-xs",
    xsBolder: "text-xsBolder font-xsBolder tracking-xsBolder leading-xsBolder",
  };
  return (
    <Component className={classnames(variants[variant], className)}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  as: PropTypes.any,
  children: PropTypes.any,
  variant: PropTypes.any,
};

// Text.defaultProps = {
//   as: "h1",
// };

export default Text;
