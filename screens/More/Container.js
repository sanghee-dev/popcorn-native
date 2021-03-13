import React from "react";
import Presenter from "./Presenter";

export default ({
  route: {
    params: { overview, tagline },
  },
}) => {
  return <Presenter overview={overview} tagline={tagline} />;
};
