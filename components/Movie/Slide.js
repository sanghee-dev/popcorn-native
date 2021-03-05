import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Poster from "../Poster";
import Vote from "../Vote";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View``;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const Movie = styled.View`
  width: ${WIDTH / 3}px;
  margin-right: 16px;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 2}px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;
const Info = styled.View`
  width: 100%;
`;
const Title = styled.Text``;

export default ({ movieList }) => (
  <Container>
    <ScrollView
      style={StyleSheet.Border}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    >
      {movieList.map((movie) => (
        <Movie>
          <PosterContainer>
            <Poster posterUrl={movie.poster_path} />
          </PosterContainer>

          <Info>
            <Title style={StyleSheet.Title} numberOfLines={1}>
              {movie.title}
            </Title>
            <Vote vote={movie.vote_average} />
          </Info>
        </Movie>
      ))}
    </ScrollView>
  </Container>
);
