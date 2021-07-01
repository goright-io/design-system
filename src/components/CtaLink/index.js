import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Cta Link
 *
 * A call-to-action link with decorative arrow afterwards
 */
const CtaLink = ({
  to,
  as,
  ref,
  children,
  className,
  arrow = "end",
  ...props
}) => {
  const classes = classnames(
    "cursor-pointer text-light-on-background-900 inline-flex items-center group hover:text-light-on-background-700 focus:ring-primary-400 focus:ring-1",
    className
  );

  return (
    <Text
      as={as}
      href={to}
      variant="lgBolder"
      className={classes}
      ref={ref}
      {...props}
    >
      {arrow === "start" && (
        <span className="transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none">
          ←
        </span>
      )}
      <span>
        {arrow == "start" && "\u2004"}

        {children}
        {arrow == "end" && "\u2004"}
      </span>
      {arrow === "end" && (
        <span className="transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none">
          →
        </span>
      )}
    </Text>
  );
};

CtaLink.propTypes = {
  as: PropTypes.node,
  children: PropTypes.node,
  ref: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string,
  arrow: PropTypes.oneOf(["start", "end"]),
};

export default CtaLink;
