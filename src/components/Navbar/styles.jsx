import styled from 'styled-components';

export const Container = styled.nav.attrs({
  className: 'navbar-container',
})`
  background-color: #ef5350;
  display: flex;
  align-items: center;
  margin: 0 -10px;
  padding: 10px;
`;

export const Icon = styled.img.attrs({
  className: 'navbar-icon',
})`
  width: 100px;
  height: 50px;
`;