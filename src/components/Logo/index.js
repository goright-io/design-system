import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as GorightLogo } from "./goright_logo.svg";
import classnames from "classnames";

/* Logo
 *
 */
const Logo = ({ className }) => {
  return (
    <div className={classnames("flex", className)}>
      <GorightLogo />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
