import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Poster from "../../components/Poster";
import Vote from "../../components/Vote";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: 100%;
  height: ${WIDTH}px;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 2}px;
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
      <Vote vote={vote} />
    </Info>
  </Container>
);
