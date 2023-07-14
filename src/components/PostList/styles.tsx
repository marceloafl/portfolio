'use client';

import styled from "styled-components";

export const PostLink = styled.a`
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  text-decoration: none;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }

  div {
    display: flex;
    position: relative;

    p {
      font-size: 12px;
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;
