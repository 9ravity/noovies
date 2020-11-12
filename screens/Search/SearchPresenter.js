import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

//View Page handler
const SearchPresenter = ({ movies, shows, onChange, onSubmit, keyword }) => {
  return (
    <Container
      contentContainerStyl={{
        padding: 10,
      }}
    >
      <Input
        placeholder={"Write a keyword"}
        onChange={onChange}
        onSubmit={onSubmit}
        value={keyword}
      />
      {movies.length !== 0 && (
        <HorizontalSlider title={"Search Movies"}>
          {movies.map((movie) => {
            return (
              <Vertical
                key={movie.id}
                id={movie.id}
                votes={movie.vote_average}
                title={movie.title}
                poster={movie.poster_path || movie.backdrop_path}
              />
            );
          })}
        </HorizontalSlider>
      )}
      {shows.length !== 0 && (
        <HorizontalSlider title={"Search Tv Shows"}>
          {shows.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              votes={show.vote_average}
              title={show.name}
              poster={show.poster_path}
            />
          ))}
        </HorizontalSlider>
      )}
    </Container>
  );
};

export default SearchPresenter;
