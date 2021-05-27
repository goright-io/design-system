import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Cta Link
 *
 * A call-to-action link with decorative arrow afterwards
 */
const CtaLink = ({ to, as, ref, children, className, ...props }) => {
  const Component = as;
  const classes =
    "cursor-pointer text-light-on-background-900 inline-flex items-center group hover:text-light-on-background-700 focus:ring-primary-400 focus:ring-1";

  return Component ? (
    <Component href={to}>
      <Text
        as="a"
        variant="lgBolder"
        className={classnames(classes, className)}
        ref={ref}
        {...props}
      >
        {children}\u00a0→
      </Text>
    </Component>
  ) : (
    <>
      <Text
        as="a"
        href={to}
        variant="lgBolder"
        className={classes}
        ref={ref}
        {...props}
      >
        <span>
          {children}
          {"\u2004"}
        </span>
        <span className="transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none">
          →
        </span>
      </Text>
    </>
  );
};

CtaLink.propTypes = {
  as: PropTypes.node,
  children: PropTypes.node,
  ref: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default CtaLink;
