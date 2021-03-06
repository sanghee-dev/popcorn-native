import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [data, setData] = useState({
    loading: true,
    nowPlaying: [],
    upcoming: [],
    popular: [],
    topRated: [],
    nowPlayingError: null,
    upcomingError: null,
    popularError: null,
    topRatedError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    const [popular, popularError] = await movieApi.popular();
    const [topRated, topRatedError] = await movieApi.topRated();
    setData({
      nowPlaying,
      upcoming,
      popular,
      topRated,
      nowPlayingError,
      upcomingError,
      popularError,
      topRatedError,
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return () => (mounted = false);
  }, []);

  return <Presenter {...data} />;
};
