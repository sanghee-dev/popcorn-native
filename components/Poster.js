import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import PropTypes from "prop-types";
import { imageApi } from "../api";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Poster = ({
  posterUrl,
  resizeMode = "cover",
  id = 0,
  blurRadius = 0,
  opacity = 1,
}) => {
  return (
    <Container>
      {posterUrl ? (
        <Image
          resizeMode={resizeMode}
          source={{ uri: imageApi(posterUrl) }}
          blurRadius={blurRadius}
          style={{ opacity: opacity }}
        />
      ) : (
        <LinearGradient
          style={StyleSheet.Gradient}
          colors={
            id % 2 === 0
              ? ["rgba(0, 255, 84, 0)", "rgba(0, 255, 84, 1)"]
              : ["rgba(0, 255, 84, 1)", "rgba(0, 255, 84, 0)"]
          }
        />
      )}
    </Container>
  );
};

Poster.propTypes = { posterUrl: PropTypes.string, id: PropTypes.number };

export default Poster;
