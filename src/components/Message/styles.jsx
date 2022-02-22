import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'message-container',
})`
  align-self: center;
  margin: auto;
`;

export const Text = styled.p.attrs({
  className: 'message-text',
})`
  color: #4c5357;
  font-weight: 600;
`;
