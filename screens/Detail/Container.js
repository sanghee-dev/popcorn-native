import React, { useLayoutEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi, tvApi } from "../../api";

export default ({
  navigation: { setOptions },
  route: {
    params: {
      isTV,
      id,
      title,
      posterUrl,
      backdropUrl,
      vote,
      overview,
      release,
    },
  },
}) => {
  const [data, setData] = useState({
    loading: true,
    video: [],
    credits: [],
    reviews: [],
    detail: {},
    isTV,
    id,
    title,
    posterUrl,
    backdropUrl,
    vote,
    overview,
    release,
  });

  const getCollection = async () => {
    const [detail, detailError] = await movieApi.detail(id);
    const [collection, collectionError] = await movieApi.collection(
      detail.belongs_to_collection?.id
    );
    return collection;
  };

  const getData = async () => {
    const [video, videoError] = !isTV
      ? await movieApi.video(id)
      : await tvApi.video(id);
    const [credits, creditsError] = !isTV
      ? await movieApi.credits(id)
      : await tvApi.credits(id);
    const [reviews, reviewsError] = !isTV
      ? await movieApi.reviews(id)
      : await tvApi.reviews(id);
    const [detail, detailError] = !isTV
      ? await movieApi.detail(id)
      : await tvApi.detail(id);
    const collection = await getCollection();

    setData({
      loading: false,
      video,
      credits,
      reviews,
      id,
      title,
      posterUrl,
      backdropUrl,
      vote,
      overview,
      release,
      detail,
      collection,
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

  return <Presenter {...data} refreshFn={getData} />;
};
