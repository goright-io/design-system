import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import CtaLink from "../CtaLink";

/* Card
 *
 * TODO: add component description
 */
const Card = ({ heading, link, children }) => {
  return (
    <div className="flex flex-col p-6 border border-light-on-background-900 hover:bg-primary-50 text-light-on-background-900">
      {heading && (
        <Text as="h3" variant="2Xl" className="mb-6">
          {heading}
        </Text>
      )}
      {children && <div className="mb-6">{children}</div>}
      {link && (
        <div className="mt-auto">
          <CtaLink>{link}</CtaLink>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
