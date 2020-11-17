import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

/* 
  모든 데이터는 Container component가 관리하고, Presenter는 View만 관리
*/

export default () => {
  const [refreshing, setRefreshing] = useState(false);

  //render를 1번만 하기 위해서 큰 state를 만들기,
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();

    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };
  //[]는 단 1번만 실행 mount 될 때
  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresenter refreshFn={getData} {...movies} />;
  // 모든 state를 보내기 때문에 proptypes 필요 없음
};
