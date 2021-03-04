import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: 100%;
  height: ${WIDTH / 3}px;
`;
const Section = styled.View`
  height: 100%;
  border: 1px solid black;
  border-radius: 8px;
`;
const Title = styled.Text``;

export default ({ id, title, overview, vote, posterUrl, backdropUrl }) => (
  <Container style={StyleSheet.Border}>
    <Title style={StyleSheet.Title} numberOfLines={1}>
      {title}
    </Title>
  </Container>
);
