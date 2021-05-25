import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
/* Nav
 *
 * horizontal menu with links
 */

const Nav = ({ items }) => {
  return (
    <ul className="inline-flex justify-between w-full list-none text-light-on-background-900 dark:text-dark-on-background-900">
      {items.map((item) => (
        <li key={item.href}>
          <Text variant="2Xl" as="a" href={item.href}>
            {item.name}
          </Text>
        </li>
      ))}
    </ul>
  );
};

Nav.propTypes = {
  items: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default Nav;
