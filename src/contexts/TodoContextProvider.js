import React, { useState } from 'react';

export const TodoContext = React.createContext();

export const TodoContextProvider = props => {
  const [state, setState] = useState({
    todos: [],
  });

  const addTodo = newTodo => {
    setState({
      todos: [...state.todos, newTodo],
    });
  };

  const onChangeStatus = index => {
    const updateTodos = [...state.todos];
    updateTodos[index] = {
      ...updateTodos[index],
      done: !updateTodos[index].done,
    };
    setState({ todos: updateTodos });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo: addTodo,
        onChangeStatus: onChangeStatus,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
