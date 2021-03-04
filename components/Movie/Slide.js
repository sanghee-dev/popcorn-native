import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { imageApi } from "../../api";
import Poster from "../../components/Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: 100%;
  height: ${HEIGHT}px;
`;
const PosterContainer = styled.View`
  width: ${(WIDTH / 3) * 2}px;
  height: ${WIDTH}px;
`;

const Info = styled.View`
  width: 100%;
  height: ${WIDTH / 2}px;
`;
const Title = styled.Text``;

export default ({ id, title, overview, vote, posterUrl, backdropUrl }) => (
  <Container>
    <PosterContainer>
      <Poster posterUrl={posterUrl} resizeMode="cover" />
    </PosterContainer>

    <Info>
      <Title style={StyleSheet.Title} numberOfLines={1}>
        {title}
      </Title>
      <Title style={StyleSheet.Title} numberOfLines={1}>
        {vote}
      </Title>
    </Info>
  </Container>
);
