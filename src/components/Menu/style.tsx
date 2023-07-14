"use client";

import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;

  a {
    color: #000;
    text-decoration: none;
  }
`;

interface ItemProps {
  active: boolean;
}

export const Item = styled.li<ItemProps>`
  align-items: center;
  background-color: ${(props) => (props.active ? "#e6e6e6" : "")};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: center;
  pointer-events: ${props => props.active ? 'none' : 'auto'};
  width: 64px;
`;
