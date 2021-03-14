import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

const genres = {
  adventure: 12,
  fantasy: 14,
  animated: 16,
  drama: 18,
  horror: 27,
  action: 28,
  comedy: 35,
  history: 36,
  western: 37,
  thriller: 53,
  crime: 80,
  documentary: 99,
  sciFi: 878,
  mystery: 9648,
  music: 10402,
  romance: 10749,
  family: 10751,
  war: 10752,
  TVMovie: 10770,
};

export default () => {
  const [data, setData] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
  });
  const [selectedArray, setSelectedArray] = useState([
    "adventure",
    "fantasy",
    "animated",
    "drama",
  ]);

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [firstGenre, firstGenreError] = await movieApi.discoverGenre(
      genres[selectedArray[0]]
    );
    const [secondGenre, secondGenreError] = await movieApi.discoverGenre(
      genres[selectedArray[1]]
    );
    const [thirdGenre, thirdGenreError] = await movieApi.discoverGenre(
      genres[selectedArray[2]]
    );
    const [fourthGenre, fourthGenreError] = await movieApi.discoverGenre(
      genres[selectedArray[3]]
    );
    setData({
      loading: false,
      nowPlaying,
      firstGenre,
      secondGenre,
      thirdGenre,
      fourthGenre,
      nowPlayingError,
      firstGenreError,
      secondGenreError,
      thirdGenreError,
      fourthGenreError,
      selectedArray,
      setSelectedArray,
      genres,
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return () => (mounted = false);
  }, [selectedArray]);

  return <Presenter {...data} refreshFn={getData} />;
};
