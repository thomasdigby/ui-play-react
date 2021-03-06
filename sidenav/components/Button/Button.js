import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Button.scss';

const ICONS = [
  'menu',
  'close',
];

const Button = ({
  onClick,
  icon,
  customStyles,
}) => {
  const classes = classnames(styles.base, customStyles, 'material-icons');
  return (
    <button className={classes} onClick={onClick}>{icon}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(ICONS).isRequired,
  customStyles: PropTypes.string,
};

export default Button;
