import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [data, setData] = useState({
    loading: true,
    data: [],
    dataError: null,
  });

  const getData = async () => {
    const [movieTrend, movieTrendError] = await movieApi.trending();
    const [tvTrend, tvTrendError] = await tvApi.trending();

    setData({
      loading: false,
      movieTrend,
      movieTrendError,
      tvTrend,
      tvTrendError,
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
