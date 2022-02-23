import styled from "styled-components";
import { breakPoints } from "./breakpoints";

export const MainContainer = styled.div.attrs({
  className: 'main-container',
})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 10px;

  ${breakPoints.smallTablet} {
    padding: 0 30px;
  }

  ${breakPoints.desktop} {
    padding: 0 100px;
  }
`;