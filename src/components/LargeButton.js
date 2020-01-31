import React from 'react';
import classNames from 'classnames';
import './LargeButton.css';

const LargeButton = ({ label, status = '' }) => {
  var btnClass = classNames({
    'btn--primary': true,
    'btn--light': status === '',
    'btn--active': status === 'active',
    'btn--disabled': status === 'disabled',
  });

  return <button className={btnClass}>{label}</button>;
};

export default LargeButton;
