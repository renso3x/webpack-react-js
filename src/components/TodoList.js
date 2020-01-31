import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

import './TodoList.css';

const TodoList = ({ todo, onItemClick }) => {
  return (
    <ListGroupItem
      className={`${todo.done ? 'item-done' : ''}`}
      onClick={onItemClick}
    >
      {todo.name}
    </ListGroupItem>
  );
};

TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default TodoList;
