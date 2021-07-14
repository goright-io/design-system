import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Timetable
 *
 * A table to represent workshop programm in structured way
 */
const Timetable = ({ data, header, className }) => {
  return (
    data && (
      <Text
        as="table"
        variant="xlBolder"
        className={classnames(
          "text-light-on-background-900 table-auto",
          className
        )}
      >
        {header && (
          <Text as="caption" variant="4Xl" className="mb-5 text-left">
            {header}
          </Text>
        )}
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.name + i}
              className="flex py-6 border-b-2 border-light-on-background-900"
            >
              <td className="px-4 text-left w-30 sm:w-64 ">
                <Text
                  as="span"
                  variant="smBolder"
                  className={`${row.color} text-light-on-background-50 p-1 sm:whitespace-nowrap`}
                >
                  {row.time}
                </Text>
              </td>
              <td className="w-1/2 px-4 overflow-hidden text-left overflow-ellipsis">
                <Text as="span" variant="xlBolder">
                  {row.name}
                </Text>
              </td>
              <td className="w-1/2 px-4 overflow-hidden text-left overflow-ellipsis">
                <Text as="span" variant="xlBolder">
                  {row.description}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </Text>
    )
  );
};

Timetable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  header: PropTypes.string,
  className: PropTypes.string,
};

export default Timetable;
