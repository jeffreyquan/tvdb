import styled from "styled-components";

const colorType = (color: string | undefined) => {
  switch(color) {
    case "primary":
      return "blue";
    case "danger":
      return "red";
    default:
      return "grey"
  }
}

export const Button = styled.button`
  display: block;
  cursor: pointer;
  border: 0;
  margin: 5px 0;
  font-size: 20px;
  background-color: ${({color}) => colorType(color)}
`;