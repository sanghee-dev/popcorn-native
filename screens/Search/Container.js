import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState({
    loading: true,
    movieResult: [],
    tvResult: [],
    movieResultError: null,
    tvResultError: null,
  });
  const onChangeText = (text) => {
    setKeyword(text);
  };
  const onSubmitEditing = () => {
    console.log(keyword);
  };

  const getData = async () => {
    const [movieResult, movieResultError] = await movieApi.search(keyword);
    const [tvResult, tvResultError] = await tvApi.search(keyword);
    setData({
      movieResult,
      tvResult,
      movieResultError,
      tvResultError,
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
      setData({ loading: false });
    }
    return () => (mounted = false);
  }, [keyword]);

  return (
    <Presenter
      keyword={keyword}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      {...data}
    />
  );
};
