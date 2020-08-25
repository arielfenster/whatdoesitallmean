import styled from 'styled-components';

const Button = styled.button`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: ${props => props.disabled ? 'grey' : 'green'};
  color: white;
  font-size: 15px;
  flex: 0.5;
  border-radius: 5px;
  border: 2px solid black;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export default Button;
