import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";

/* Timetable
 *
 * A table to represent workshop programm in structured way
 */
const Timetable = ({ data, header }) => {
  return (
    data && (
      <Text
        as="table"
        variant="xlBolder"
        className="w-full text-light-on-background-900"
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
              <th className="w-1/2 p-0 text-left">{row.name}</th>
              <th className="w-1/2 p-0 text-left">{row.description}</th>
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
};

export default Timetable;
