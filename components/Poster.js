import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { imageApi } from "../api";

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8;
`;

const Poster = ({ posterUrl }) => {
  return <Image resizeMode="contain" source={{ uri: imageApi(posterUrl) }} />;
};

Poster.propTypes = { posterUrl: PropTypes.string.isRequired };

export default Poster;
