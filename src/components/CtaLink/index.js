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
  underline = false,
  ...props
}) => {
  console.log("🚀 ~ file: index.js ~ line 20 ~ underline", underline);
  const classes = classnames(
    "cursor-pointer text-light-on-background-900 inline-flex items-center group hover:text-light-on-background-700 focus:bg-highlight-yellow-100 bg-no-repeat",
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
        <span className="transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none !no-underline">
          ←{"\u2004"}
        </span>
      )}
      <span className={underline ? "underline" : "no"}>{children}</span>
      {arrow === "end" && (
        <span className="no-underline transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none">
          {"\u2004"}→
        </span>
      )}
    </Text>
  );
};

CtaLink.propTypes = {
  children: PropTypes.node,
  ref: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string,
  arrow: PropTypes.oneOf(["start", "end"]),
  underline: PropTypes.bool,
};

export default CtaLink;
