import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import CtaLink from "../CtaLink";
import classnames from "classnames";

/* Card
 *
 * TODO: add component description
 */
const Card = ({ heading, link, children, className }) => {
  const linkText = link ? link.text : null;
  return (
    <div
      className={classnames(
        "flex flex-col h-full p-6 border border-light-on-background-900 hover:bg-primary-50 text-light-on-background-900",
        className
      )}
    >
      {heading && (
        <Text as="h3" variant="2Xl" className="mb-6">
          {heading}
        </Text>
      )}
      {children && children}
      {link && linkText && (
        <div className="mt-auto">
          <CtaLink to={link.href}>{link.text}</CtaLink>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default Card;
