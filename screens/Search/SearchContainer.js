import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import PropTypes from "prop-types";
import { movieApi, tvApi } from "../../api";

// axios, data handler
const SearchContainer = ({}) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showsError: null,
  });
  const onChange = (text) => {
    setKeyword(text);
  };

  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showsError,
    });
  };

  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};
export default SearchContainer;
