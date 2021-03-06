import React, { useEffect, useLayoutEffect, useState } from "react";
import Presenter from "./Presenter";
import { tvApi } from "../../api";

export default ({}) => {
  const [tv, setTv] = useState({
    loading: true,
    airingToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
    airingTodayError: null,
    onTheAirError: null,
    popularError: null,
    topRatedError: null,
  });

  const getData = async () => {
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [onTheAir, onTheAirError] = await tvApi.onTheAir();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedError] = await tvApi.topRated();
    setTv({
      airingToday,
      onTheAir,
      popular,
      topRated,
      airingTodayError,
      onTheAirError,
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

  return <Presenter {...tv} />;
};
