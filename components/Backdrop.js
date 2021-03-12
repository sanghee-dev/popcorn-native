import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import PropTypes from "prop-types";
import { imageApi } from "../api";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.View``;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Backdrop = ({ backdropUrl, id = 0 }) => {
  return (
    <Container>
      {backdropUrl ? (
        <Image
          resizeMode="cover"
          source={{ uri: imageApi(backdropUrl) }}
          blurRadius={0}
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

Backdrop.propTypes = {
  backdropUrl: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default Backdrop;
