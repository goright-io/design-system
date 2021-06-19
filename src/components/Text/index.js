import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import { getColors } from "../../utils/getTheme";

/* Text
 *
 * Any text block
 */
const Text = ({
  variant = "base",
  children,
  as: Component = "p",
  className,
  highlight,
  ...props
}) => {
  const variants = {
    "9xl": "text-9Xl font-9Xl tracking-9Xl leading-9Xl",
    "8xl": "text-8Xl font-8Xl tracking-8Xl leading-8Xl",
    "7xl": "text-7Xl font-7Xl tracking-7Xl leading-7Xl",
    "6xl": "text-6Xl font-6Xl tracking-6Xl leading-6Xl",
    "5xl": "text-5Xl font-5Xl tracking-5Xl leading-5Xl",
    "4xl": "text-4Xl font-4Xl tracking-4Xl leading-4Xl",
    "3xl": "text-3Xl font-3Xl tracking-3Xl leading-3Xl",
    "2xl": "text-2Xl font-2Xl tracking-2Xl leading-2Xl",
    xl: "text-xl font-xl tracking-xl leading-xl",
    xlbolder: "text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder",
    lg: "text-lg font-lg tracking-lg leading-lg",
    lgbolder: "text-lgBolder font-lgBolder tracking-lgBolder leading-lgBolder",
    base: "text-base font-base tracking-base leading-base",
    basebolder:
      "text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder",
    sm: "text-sm font-sm tracking-sm leading-sm",
    smbolder: "text-smBolder font-smBolder tracking-smBolder leading-smBolder",
    xs: "text-xs font-xs tracking-xs leading-xs",
    xsbolder: "text-xsBolder font-xsBolder tracking-xsBolder leading-xsBolder",
  };

  const highlightClasses = `bg-highlight-${highlight}`;
  return (
    <Component
      className={classnames(
        variants[variant.toLowerCase()],
        highlight ? highlightClasses : "",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  as: PropTypes.node,
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
  highlight: PropTypes.oneOf(Object.keys(getColors())),
};

Text.defaultProps = {
  as: "p",
};

export default Text;
