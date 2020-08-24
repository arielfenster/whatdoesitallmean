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
      if (correctAnswer === value) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState(prevState => ({
          ...prevState,
          answer: value,
        }));
      }
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