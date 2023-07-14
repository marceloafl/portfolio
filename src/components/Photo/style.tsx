import styled from "styled-components";

export const PhotoWrapper = styled.div`
  background-color: yellow;
  border-radius: 50%;
  height: 80px;
  position: relative;
  width: 80px;

  img{
    border-radius: inherit;
    filter: grayscale(1);
  }
`;