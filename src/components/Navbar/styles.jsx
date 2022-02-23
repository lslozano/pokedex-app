import styled from 'styled-components';
import { breakPoints } from '../../breakpoints';

export const Container = styled.nav.attrs({
  className: 'navbar-container',
})`
  background-color: #ef5350;
  display: flex;
  align-items: center;
  margin: 0 -10px;
  padding: 10px;

  ${breakPoints.smallTablet} {
    margin: 0 -30px;
    padding-inline-start: 40px;
  }

  ${breakPoints.desktop} {
    margin: 0 -100px;
    padding-inline-start: 100px;
  }
`;

export const Icon = styled.img.attrs({
  className: 'navbar-icon',
})`
  width: 100px;
  height: 50px;
`;