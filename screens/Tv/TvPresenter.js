import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import List from "../../components/List";

const Container = styled.View`
  margin-top: 30px;
`;

const TvPresenter = ({ refreshFn, loading, popular, topRated, today }) => {
  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <Container>
        <HorizontalSlider title={"Popular Shows"}>
          {popular.map((show) => {
            return (
              <Vertical
                id={show.id}
                key={show.id}
                poster={show.poster_path}
                title={show.name}
                votes={show.vote_average}
              />
            );
          })}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated"}>
          {topRated.map((show) => {
            return (
              <Vertical
                id={show.id}
                key={show.id}
                poster={show.poster_path}
                title={show.name}
                votes={show.vote_average}
              />
            );
          })}
        </HorizontalSlider>
        <List title={"Airing Today"}>
          {today.map((show) => {
            return (
              <Horizontal
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                overview={show.overview}
              />
            );
          })}
        </List>
      </Container>
    </ScrollContainer>
  );
};

export default TvPresenter;
