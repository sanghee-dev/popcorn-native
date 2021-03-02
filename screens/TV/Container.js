import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";

export default () => {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
    }
    return () => (mounted = false);
  }, []);

  return <Presenter />;
};
