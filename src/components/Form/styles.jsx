import styled from "styled-components";

export const Container = styled.form.attrs({
  className: 'form-container',
})`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div.attrs({
  className: 'form-buttons',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;