import PropTypes from "prop-types";
import React from "react";
import * as CarbonIcons from "@carbon/icons-react";
import classnames from "classnames";

/* Icon
 *
 * Styled container around Carbon Design icon
 */
const Icon = ({ name, className }) => {
  const Icon = CarbonIcons[name];
  return (
    Icon && (
      <span
        className={classnames(
          "inline-flex p-4 bg-light-background-800",
          className
        )}
      >
        <Icon className="text-light-on-background-800" />
      </span>
    )
  );
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
