import styled from 'styled-components';
import { breakPoints } from '../../breakpoints';

export const ButtonContainer = styled.button.attrs({
  className: 'button-container',
})`
  background-color: ${props => props.disabled ? '#d3d3d3' : '#ef5350'};
  border: 1px solid ${props => props.disabled ? '#d3d3d3' : '#ef5350'};
  border-radius: 20px;
  width: 125px;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  margin-block-start: 10px;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  ${breakPoints.smallTablet} {
    width: 150px;
    font-size: 1rem;
  }
`;