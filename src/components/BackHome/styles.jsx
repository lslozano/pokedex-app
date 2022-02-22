import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'backhome-container',
})`
  background-color: #ef5350;
  border-radius: 20px;
  width: 126px;
  padding: 0 20px;
  margin-block-end: 35px;

  a {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
  }
`;