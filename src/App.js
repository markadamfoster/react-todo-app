import React, { useState } from "react";
import styled from "styled-components";

import AddTodo from "./AddTodo";
import { GlobalStyle } from "./GlobalStyle";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 123, text: "Buy groceries", checked: false }
  ]);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  };

  const updateTodo = todo => {
    const newTodos = [...todos];
    newTodos[todos.findIndex(el => el.id === todo.id)] = todo;
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.main`
  width: 600px;
  max-width: 96%;
  margin: 30px auto;
`;
