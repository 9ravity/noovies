import React from "react";
import { View, Text, Dimensions } from "react-native";
import ScrollContainer from "../components/ScrollContainer";
import styled from "styled-components/native";
import { apiImage } from "../api";
import Poster from "../components/Poster";
import Votes from "../components/Votes";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 4}px;
  align-items: center;
  justify-content: flex-end;
`;
const Info = styled.View`
  margin-left: 40px;
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 80px;
  padding: 0px 30px;
`;
const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 5px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  console.log(navigation);
  console.log(id);
  //console.log(route);
  //const param = route.params.contact;
  navigation.setOptions({ title });
  return (
    <ScrollContainer loading={false}>
      <Header>
        <BG source={{ uri: apiImage(backgroundImage, "-") }} />
        <Container>
          <Poster url={poster} />
          <Info>
            <Title>{title}</Title>
            {votes && <Votes votes={votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{overview}</DataValue>
          </>
        )}
      </Data>
    </ScrollContainer>
  );
};
