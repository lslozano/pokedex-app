import styled from 'styled-components';
import { breakPoints } from '../../breakpoints';

export const CardsContainer = styled.div.attrs({
  className: 'cards-container',
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakPoints.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
    margin-block-start: 50px;
  }
`;