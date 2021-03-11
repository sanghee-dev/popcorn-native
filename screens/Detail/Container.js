import React, { useLayoutEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

export default ({
  navigation: { setOptions },
  route: {
    params: { id, title, posterUrl, backdropUrl, vote, overview, release },
  },
}) => {
  const [data, setData] = useState({
    loading: true,
    video: [],
    credits: [],
    collection: [],
    reviews: [],
    videoError: null,
    creditsError: null,
    collectionError: null,
    reviewsError: null,
    id,
    title,
    posterUrl,
    backdropUrl,
    vote,
    overview,
    release,
  });
  const getData = async () => {
    const [video, videoError] = await movieApi.video(id);
    const [credits, creditsError] = await movieApi.credits(id);
    const [collection, collectionError] = await movieApi.collection(id);
    const [reviews, reviewsError] = await movieApi.reviews(id);
    setData({
      loading: false,
      video,
      credits,
      collection,
      reviews,
      videoError,
      creditsError,
      collectionError,
      reviewsError,
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
