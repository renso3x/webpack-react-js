import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Button } from 'reactstrap';

import './AddForm.css';

const FormInput = ({ handleChange, handleSubmit, value }) => {
  return (
    <FormGroup className="form">
      <Input
        className="form-input"
        type="text"
        name="todo"
        id="todo"
        value={value}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <Button className="form-button" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </FormGroup>
  );
};

FormInput.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormInput;
