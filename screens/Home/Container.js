import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

const genres = {
  12: "adventure",
  14: "fantasy",
  16: "animated",
  18: "drama",
  27: "horror",
  28: "action",
  35: "comedy",
  36: "history",
  37: "western",
  53: "thriller",
  80: "crime",
  99: "documentary",
  878: "sciFi",
  9648: "mystery",
  10402: "music",
  10749: "romance",
  10751: "family",
  10752: "war",
  10770: "TVMovie",
};

export default () => {
  const [data, setData] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
  });
  const [selectedGenre, setSelectedGenre] = useState({
    12: "adventure",
    14: "fantasy",
    16: "animated",
    18: "drama",
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [firstGenre, firstGenreError] = await movieApi.discoverGenre(
      Object.keys(selectedGenre)[0]
    );
    const [secondGenre, secondGenreError] = await movieApi.discoverGenre(
      Object.keys(selectedGenre)[1]
    );
    const [thirdGenre, thirdGenreError] = await movieApi.discoverGenre(
      Object.keys(selectedGenre)[2]
    );
    const [fourthGenre, fourthGenreError] = await movieApi.discoverGenre(
      Object.keys(selectedGenre)[3]
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
      selectedGenre,
      setSelectedGenre,
      genres,
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return () => (mounted = false);
  }, []);

  return <Presenter {...data} refreshFn={getData} />;
};
