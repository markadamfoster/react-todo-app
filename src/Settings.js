import React from "react";
import styled from "styled-components";

import { SettingsContext } from "./SettingsContext";

function Settings() {
  return (
    <Wrapper>
      <SettingsContext.Consumer>
        {context => (
          <button onClick={() => context.toggleShowCompleted()}>
            {context.state.showCompleted ? "Hide Completed" : "Show Completed"}
          </button>
        )}
      </SettingsContext.Consumer>
    </Wrapper>
  );
}

export default Settings;

const Wrapper = styled.div``;
