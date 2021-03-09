import React, { useLayoutEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

export default ({
  navigation: { setOptions },
  route: {
    state,
    params: { id, title, posterUrl, backdropUrl, vote, overview, release },
  },
}) => {
  const [data, setData] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    id,
    title,
    posterUrl,
    backdropUrl,
    vote,
    overview,
    release,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    setData({
      loading: false,
      nowPlaying,
      nowPlayingError,
      id,
      title,
      posterUrl,
      backdropUrl,
      vote,
      overview,
      release,
    });
  };

  useLayoutEffect(() => {
    let mounted = true;
    if (mounted) {
      setOptions({ title });
      getData();
    }
    return () => (mounted = false);
  }, []);

  return <Presenter {...data} />;
};
