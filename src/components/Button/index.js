/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
const sizes = {
  small:
    "py-2 px-3  text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder rounded-sm",
  big: "py-4 px-6 text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder rounded",
};
const Button = ({ href, label, children, size, ...props }) => {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      className={classnames(
        size ? sizes[size] : sizes.big,
        "bg-primary-500 text-light-background-900 inline-flex items-center"
      )}
      {...props}
    >
      {label ? label : children}
    </Component>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
