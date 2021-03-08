import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { imageApi } from "../api";

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Backdrop = ({ backdropUrl }) => {
  return (
    <Image
      resizeMode="cover"
      source={{ uri: imageApi(backdropUrl) }}
      blurRadius={4}
    />
  );
};

Backdrop.propTypes = { backdropUrl: PropTypes.string.isRequired };

export default Backdrop;
