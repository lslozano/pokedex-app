import styled from 'styled-components';
import { breakPoints } from '../../breakpoints';

export const Container = styled.form.attrs({
  className: 'form-container',
})`
  display: flex;
  flex-direction: column;

  ${breakPoints.largeTablet} {
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div.attrs({
  className: 'form-buttons',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${breakPoints.largeTablet} {
    width: 350px;
  }
`;