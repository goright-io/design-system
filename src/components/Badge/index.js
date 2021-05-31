import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as FigmaCursor } from "./figmaCursor.svg";
import Text from "../Text";
import classnames from "classnames";
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/* Badge
 *
 * TODO: add component description
 */
const Badge = ({ role, isHidden }) => {
  const badgeClass = role === "developer" ? "mr-4" : "mb-";
  const iconClass =
    role === "developer"
      ? "ml-6 mt-4 text-accent-yellow"
      : "ml-3 text-accent-green transform scale-x--1 scale-x-mirror scale-x-3";
  const textClass =
    role === "developer"
      ? "bg-accent-yellow"
      : "bg-accent-green text-light-background-900";
  return (
    <div className={classnames(badgeClass, "flex flex-col items-start w-16")}>
      {!isHidden && (
        <>
          <FigmaCursor className={iconClass} />
          <Text as="span" variant="xs" className={classnames(textClass, "p-1")}>
            {capitalize(role)}
          </Text>
        </>
      )}
    </div>
  );
};

Badge.propTypes = {
  isHidden: PropTypes.bool,
  role: PropTypes.string,
};

export default Badge;
