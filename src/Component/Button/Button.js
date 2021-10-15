import React from "react";
import PropTypes from "prop-types";

import s from "./Button.module.css";

const Button = ({ onPress }) => {
  return (
    <button type="button" onClick={onPress} classname={s.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Button;
