import React from "react";
import styled from "styled-components/native";

const Vote = styled.Text`
  color: rgb(220, 220, 220);
  font-weight: 500;
  font-size: 12px;
`;

const Votes = ({ votes }) => {
  return <Vote>⭐ {votes} / 10</Vote>;
};

export default Votes;
