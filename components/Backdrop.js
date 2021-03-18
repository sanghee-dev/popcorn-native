import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { imageApi } from "../api";
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Image = styled.Image`
  width: ${WIDTH}px;
  height: ${WIDTH / 1.8}px;
`;

const Backdrop = ({ backdropUrl, id = 0, resizeMode = "cover" }) => {
  return backdropUrl ? (
    <Image resizeMode={resizeMode} source={{ uri: imageApi(backdropUrl) }} />
  ) : (
    <LinearGradient
      style={StyleSheet.Gradient}
      colors={
        id % 2 === 0
          ? ["rgba(0, 255, 84, 0)", "rgba(0, 255, 84, 1)"]
          : ["rgba(0, 255, 84, 1)", "rgba(0, 255, 84, 0)"]
      }
    />
  );
};

Backdrop.propTypes = {
  backdropUrl: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default Backdrop;
