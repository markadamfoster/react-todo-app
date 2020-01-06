import React, { Component } from "react";

export const SettingsContext = React.createContext({
  showCompleted: true
});

export class SettingsProvider extends Component {
  state = {
    showCompleted: true
  };

  toggleShowCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted });
  };

  render() {
    return (
      <SettingsContext.Provider
        value={{
          state: this.state,
          toggleShowCompleted: this.toggleShowCompleted
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
