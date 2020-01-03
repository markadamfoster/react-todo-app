import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

AddTodo.propTypes = {
  addTodo: PropTypes.func
};

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({
      id: generateId(),
      text
    });
    setText("");
  };

  const generateId = () => Math.floor(100000 + Math.random() * 900000);

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Input
        value={text || ""}
        onChange={e => setText(e.target.value)}
        placeholder="What's next?"
      />
    </Form>
  );
}

export default AddTodo;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  color: white;
  background: #252525;
  border: 1px solid #505050;
  border-radius: 6px;
  padding: 12px;
  font-size: 17px;
  outline: none;

  &:focus {
    border: 1px solid #04aeaf;
  }
`;
