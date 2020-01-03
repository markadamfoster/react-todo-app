import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "./Todo";

TodoList.propTypes = {
  todos: PropTypes.array,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;

const List = styled.ol`
  margin: 30px 0;
  padding: 0;
  list-style: none;
`;
