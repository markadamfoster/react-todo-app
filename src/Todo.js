import React, { useState } from "react";
import PropTypes from "prop-types";
import { CheckSquare, Square, Trash2 } from "react-feather";
import styled from "styled-components";

Todo.propTypes = {
  todo: PropTypes.object,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

function Todo({ todo, updateTodo, deleteTodo }) {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleCheckboxClick = () => {
    updateTodo({
      ...todo,
      checked: !todo.checked
    });
  };

  const handleTextUpdate = e => {
    e.preventDefault();
    updateTodo({ ...todo, text: value });
    setShowInput(false);
  };

  return (
    <Wrapper>
      <Checkbox onClick={() => handleCheckboxClick()}>
        {todo.checked ? (
          <CheckSquare color="#04aeaf" size={17} />
        ) : (
          <Square color="white" size={17} />
        )}
      </Checkbox>

      {showInput ? (
        <form onSubmit={e => handleTextUpdate(e)}>
          <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={e => handleTextUpdate(e)}
          />
        </form>
      ) : (
        <Text checked={todo.checked} onClick={() => setShowInput(true)}>
          {todo.text}
        </Text>
      )}

      <Actions>
        <DeleteButton onClick={() => deleteTodo(todo.id)}>
          <Trash2 size={15} />
        </DeleteButton>
      </Actions>
    </Wrapper>
  );
}

export default Todo;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  color: white;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 3px;
  font-size: 15px;

  &:hover {
    background: #252525;
  }
`;

const Checkbox = styled.button`
  border: none;
  background-color: transparent;
  height: auto;
  padding: 6px 5px 2px;
`;

const Input = styled.input`
  margin-left: 4px;
  border: none;
  background-color: transparent;
  color: white;
`;

const Text = styled.div`
  margin-left: 5px;
  opacity: ${({ checked }) => (checked ? "0.3" : "0.9")};
`;

const Actions = styled.div`
  margin-left: auto;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #444444;
  transition: color 250ms;

  &:hover {
    color: #9a2828;
  }
`;
