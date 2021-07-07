import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Nav
 *
 * horizontal menu with links
 */
const Nav = ({ items, linkComponent, className, currentPath }) => {
  return (
    <ul
      className={classnames(
        "inline-flex justify-between list-none text-light-on-background-900 dark:text-dark-on-background-900",
        className
      )}
    >
      {items &&
        items.map((item) => (
          <li key={item.href} className="px-2">
            <Text
              variant="2Xl"
              as={linkComponent || "a"}
              href={item.href}
              highlight={currentPath == item.href ? "yellow-100" : undefined}
              className="hover:bg-highlight-yellow-100"
            >
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
  currentPath: PropTypes.string,
};

export default Nav;
