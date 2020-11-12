import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPrester from "./TvPresenter";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    popular: [],
    popularError: null,
    topRated: [],
    topRatedError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedError] = await tvApi.topRated();

    setShows({
      loading: false,
      today,
      thisWeek,
      popular,
      topRated,
      todayError,
      thisWeekError,
      popularError,
      topRatedError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <TvPrester {...shows}></TvPrester>;
};
