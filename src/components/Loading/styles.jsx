import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'loading-container',
})`
  align-self: center;
  margin: auto;
`;

export const Text = styled.p.attrs({
  className: 'loading-text',
})`
  color: #4c5357;
  font-weight: 600;
`;
