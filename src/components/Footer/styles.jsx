import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'footer-container',
})`
  background-color: #ef5350;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -10px;
  margin-block-start: auto;
  padding: 10px;
`;

export const Text = styled.p.attrs({
  className: 'footer-text',
})`
  color: #fff;
`;

export const LinksContainer = styled.div.attrs({
  className: 'footer-links-container',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  margin-block-start: 5px;
`;

export const IconLink = styled.a.attrs({
  className: 'footer-icon',
})`
  cursor: pointer;

  img {
    width: 30px;
    filter: invert(100%);
  }
`;
