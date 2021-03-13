import React from "react";
import Presenter from "./Presenter";

export default ({
  route: {
    params: {
      title,
      overview,
      release,
      vote,
      runtime,
      adult,
      tagline,
      posterUrl,
    },
  },
}) => {
  return (
    <Presenter
      title={title}
      overview={overview}
      release={release}
      vote={vote}
      runtime={runtime}
      adult={adult}
      tagline={tagline}
      posterUrl={posterUrl}
    />
  );
};
