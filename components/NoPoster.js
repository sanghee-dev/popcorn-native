import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const NoPoster = ({ id }) => (
  <Container>
    <LinearGradient
      style={StyleSheet.Gradient}
      colors={
        id % 2 === 0
          ? ["rgba(0, 255, 84, 0)", "rgba(0, 255, 84, 1)"]
          : ["rgba(0, 255, 84, 1)", "rgba(0, 255, 84, 0)"]
      }
    />
  </Container>
);

NoPoster.propTypes = { id: PropTypes.number.isRequired };

export default NoPoster;
