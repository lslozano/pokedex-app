import styled from 'styled-components';
import { breakPoints } from '../../breakpoints';

export const DetailContainer = styled.div.attrs({
  className: 'detail-card-container',
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-container {
    ${breakPoints.desktop} {
      width: 340px;
      height: auto;
      margin-block-start: 60px;
    }
  }
`;