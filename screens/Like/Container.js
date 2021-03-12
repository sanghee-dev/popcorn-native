import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

export default () => {
  const [data, setData] = useState({
    loading: true,
    data: [],
    dataError: null,
  });

  const getData = async () => {
    const [data, dataError] = await movieApi.trending();
    setData({
      loading: false,
      data,
      dataError,
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
