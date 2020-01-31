import React, { useContext, useState } from 'react';
import { ListGroup } from 'reactstrap';

import { TodoContext } from '../contexts/TodoContextProvider';
import FormInput from '../components/FormInput';
import TodoList from '../components/TodoList';
import LargeButton from '../components/LargeButton';

const Todos = () => {
  const ctx = useContext(TodoContext);

  const [todoValue, setTodo] = useState('');

  const handleSubmit = () => {
    ctx.addTodo({
      name: todoValue,
      done: false,
    });
    setTodo('');
  };

  const onItemClick = todoIndex => {
    ctx.onChangeStatus(todoIndex);
  };

  const handleChange = e => {
    setTodo(e.target.value);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <FormInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={todoValue}
      />
      {/* Todo List */}
      <ListGroup>
        {ctx.todos.length > 0 &&
          ctx.todos.map((todo, i) => (
            <TodoList key={i} todo={todo} onItemClick={() => onItemClick(i)} />
          ))}
      </ListGroup>
      <br />
      <h3>Large Button Component</h3>
      <ListGroup horizontal>
        <LargeButton label="Close Shipment" />
        <LargeButton label="Close Shipment" status="active" />
        <LargeButton label="Close Shipment" status="disabled" />
      </ListGroup>
    </div>
  );
};

export default Todos;
