import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { movieApi } from "../../api";

export default () => {
  const [data, setData] = useState({
    loading: true,
    discover: [],
    discoverError: null,
  });

  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setData({
      loading: false,
      discover,
      discoverError,
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
