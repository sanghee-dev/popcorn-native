import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Poster from "../Poster";
import Vote from "../Vote";
import Swiper from "react-native-web-swiper";

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

export default ({ movieList }) => (
  <Container>
    {console.log(movieList)}
    <Swiper controlsEnabled={false} loop timeout={3}>
      {movieList.map((movie) => (
        <>
          <PosterContainer>
            <Poster posterUrl={movie.poster_path} resizeMode="cover" />
          </PosterContainer>

          <Info>
            <Title style={StyleSheet.Title} numberOfLines={1}>
              {movie.title}
            </Title>
            <Vote vote={movie.vote_average} />
          </Info>
        </>
      ))}
    </Swiper>
  </Container>
);
