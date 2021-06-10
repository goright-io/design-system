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
        className={classnames("text-light-on-background-900", className)}
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
              <th className="text-left w-80">
                <Text
                  as="span"
                  variant="smBolder"
                  className={`${row.color} text-light-on-background-50 p-1`}
                >
                  {row.time}
                </Text>
              </th>
              <th className="w-1/2 p-0 text-left">
                <Text as="span" variant="xlBolder">
                  {row.name}
                </Text>
              </th>
              <th className="w-1/2 p-0 text-left">
                <Text as="span" variant="xlBolder">
                  {row.description}
                </Text>
              </th>
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

// table, caption, tbody, tfoot, thead, tr, th, td {
//   margin: 0;
//   padding: 0;
//   border-width: 0;
//   font-size: 100%;
//   font: inherit;
//   vertical-align: baseline;
// }
