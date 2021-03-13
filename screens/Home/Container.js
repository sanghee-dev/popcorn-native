import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

export default () => {
  const [data, setData] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [animated, animatedError] = await movieApi.discoverGenre(16);
    const [fantasy, fantasyError] = await movieApi.discoverGenre(14);
    const [comedy, comedyError] = await movieApi.discoverGenre(35);
    const [adventure, adventureError] = await movieApi.discoverGenre(35);
    setData({
      loading: false,
      nowPlaying,
      animated,
      fantasy,
      comedy,
      adventure,
      nowPlayingError,
      animatedError,
      fantasyError,
      comedyError,
      adventureError,
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
