import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 10vh;
  background-color: black;
`;

interface HeaderPropTypes {
  link?: string;
  logo?: string;
  children: React.ReactNode;
}

export const Header: React.FC<HeaderPropTypes> = ({
  link,
  logo,
  children
}) => {

  return (
  <StyledHeader>{link ? <a href={link}>{children}</a> : <span>{children}</span>}</StyledHeader>
  );
}