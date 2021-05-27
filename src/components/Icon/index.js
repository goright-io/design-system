import PropTypes from "prop-types";
import React from "react";
import * as CarbonIcons from "@carbon/icons-react";

/* Icon
 *
 * Styled container around Carbon Design icon
 */
const Icon = ({ name }) => {
  const Icon = CarbonIcons[name];
  return (
    Icon && (
      <span className="inline-flex p-4 bg-light-background-800">
        <Icon className="text-light-on-background-800" />
      </span>
    )
  );
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
