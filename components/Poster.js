import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { imageApi } from "../api";

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Poster = ({ posterUrl, resizeMode = "cover" }) => {
  return (
    <Image resizeMode={resizeMode} source={{ uri: imageApi(posterUrl) }} />
  );
};

Poster.propTypes = { posterUrl: PropTypes.string };

export default Poster;
