import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Nav
 *
 * horizontal menu with links
 */
const Nav = ({ items, linkComponent, className }) => {
  return (
    <ul
      className={classnames(
        "inline-flex justify-between list-none text-light-on-background-900 dark:text-dark-on-background-900",
        className
      )}
    >
      {items &&
        items.map((item) => (
          <li key={item.href}>
            <Text variant="2Xl" as={linkComponent || "a"} href={item.href}>
              {item.name}
            </Text>
          </li>
        ))}
    </ul>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  linkComponent: PropTypes.node,
};

export default Nav;
