import PropTypes from "prop-types";
import React from "react";

/** Emoji
 *
 * wrapper for native emoji
 */
const Emoji = ({ label, symbol, ...rest }) => (
  <span {...rest} role="img" aria-label={label ? label : ""}>
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string,
};

export default React.memo(Emoji);
