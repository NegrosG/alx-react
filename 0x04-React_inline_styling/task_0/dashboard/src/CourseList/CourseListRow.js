import React from "react";
import PropTypes from "prop-types";

const rowstyle = {
  backgroundcolor: "#f5f5f5ab"
};

const headerstyle = {
  backgroundcolor: "#deb5b545"
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowstyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerstyle} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={headerstyle}>{textFirstCell}</th>
            <th style={headerstyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
