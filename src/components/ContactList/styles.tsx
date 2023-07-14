import styled from "styled-components";


export const ul = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 8px 0;
  padding: 0;

  li {
    list-style: none;
    height: 24px;
    width: 24px;

    a {
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
  }
`;


