import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'error-container',
})`
  align-self: center;
  margin: auto;
`;

export const Text = styled.p.attrs({
  className: 'error-text',
})`
  color: #4c5357;
  font-weight: 600;
`;
