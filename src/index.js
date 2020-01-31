import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { TodoContextProvider } from './contexts/TodoContextProvider';
import Todos from './containers/Todos';

const App = () => (
  <TodoContextProvider>
    <Todos />
  </TodoContextProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
