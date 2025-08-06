import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
  let renderStatus = status === false ? "" : "-heart-fill";
  return (
    <button {...rest}>
      <i className={`bi bi-bookmark` + renderStatus}></i>
    </button>
  );
};
BookMark.propTypes = {
  status: PropTypes.bool,
};
export default BookMark;
