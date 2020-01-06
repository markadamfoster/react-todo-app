import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SettingsContext } from "./SettingsContext";
import Todo from "./Todo";

TodoList.propTypes = {
  todos: PropTypes.array,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

function TodoList({ todos, updateTodo, deleteTodo }) {
  const getTodos = showCompleted => {
    if (showCompleted) return todos;
    return todos.filter(todo => !todo.checked);
  };

  return (
    <List>
      <SettingsContext.Consumer>
        {context => {
          return getTodos(context.state.showCompleted).map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ));
        }}
      </SettingsContext.Consumer>
    </List>
  );
}

export default TodoList;

const List = styled.ol`
  margin: 30px 0;
  padding: 0;
  list-style: none;
`;
