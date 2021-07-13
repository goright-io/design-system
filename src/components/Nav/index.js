import PropTypes from "prop-types";
import React, { useState } from "react";
import Text from "../Text";
import { Menu24 } from "@carbon/icons-react";
import { Close24 } from "@carbon/icons-react";
import classnames from "classnames";

/* Nav
 *
 * horizontal menu with links
 */
const Nav = ({ items, linkComponent, className, currentPath, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <button
        className="block ml-auto md:hidden"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {isMenuOpen ? (
          <Close24 className="m-6 text-light-on-background-900" />
        ) : (
          <Menu24 className="m-6 text-light-on-background-900" />
        )}
      </button>
      <div className={isMenuOpen ? "flex flex-col" : "hidden md:flex"}>
        <ul
          className={classnames(
            "bg-light-background-900 text-center md:inline-flex flex flex-col md:flex-row justify-between list-none text-light-on-background-900 dark:text-dark-on-background-900",
            className
          )}
        >
          {items &&
            items.map((item) => (
              <li key={item.href} className="px-2 py-6 md:py-0">
                <Text
                  variant="2Xl"
                  as={linkComponent || "a"}
                  href={item.href}
                  highlight={
                    currentPath == item.href ? "yellow-100" : undefined
                  }
                  className="hover:bg-highlight-yellow-100"
                >
                  {item.name}
                </Text>
              </li>
            ))}
        </ul>
        {children}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  linkComponent: PropTypes.any,
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
