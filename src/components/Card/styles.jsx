import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'card-container',
})`
  display: flex;
  flex-direction: column;
  margin-block-start: 60px;
  padding: 0 15px 15px;
  border-radius: 0 0 15px 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  a {
    align-self: center;
  }

  .button-container {
    margin-block-start: 35px;
  }
`;

export const ImageContainer = styled.div.attrs({
  className: 'card-img-container',
})`
  background-color: #ef5350;
  border-radius: 15px 15px 0 0;
  position: relative;
  height: 180px;
  margin: 0 -15px;
`;

export const Image = styled.img.attrs({
  className: 'card-img',
})`
  position: absolute;
  top: -28px;
  width: 225px;
  left: 50%;
  margin-inline-start: -112px;
`;

export const TitleContainer = styled.div.attrs({
  className: 'card-title-container',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-block-start: 15px;
`;

export const Text = styled.p.attrs({
  className: 'card-text',
})`
  color: #4c5357;
  font-weight: 700;
`;

export const ListContainer = styled.div.attrs({
  className: 'card-list-container',
})`
  margin-block-start: 15px;

  ul > li {
    color: #4c5357;
  }
`;