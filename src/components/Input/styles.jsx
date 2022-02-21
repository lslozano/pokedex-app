import styled from 'styled-components';

export const InputField = styled.input.attrs({
  className: 'form-input',
})`
  border-radius: 25px;
  border: 2px solid #ef5350;
  padding: 5px 0 5px 10px;
  max-width: 600px;

  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;