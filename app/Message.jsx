import React from "react";
import PropTypes from "prop-types";

export const Message = ({ message }) => {
  return <span>{message}</span>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
