import React from 'react';

const WrapperComponent = (Component) => {

  class ChildComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        answer: '',
        isDisabled: true,
      };
    }

    handleChange = (correctAnswer) => (event) => {
      const { value } = event.target;
      this.setState({
        answer: value,
        isDisabled: correctAnswer !== value
      });
    }

    render() {
      const { nextStep } = this.props;

      return (
        <Component
          answer={this.state.answer}
          nextStep={nextStep}
          handleChange={this.handleChange}
          isDisabled={this.state.isDisabled}
        />
      );
    }
  }

  return ChildComponent;
}

export default WrapperComponent;