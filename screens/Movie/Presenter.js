import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movie/Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  justify-content: center;
`;
const Title = styled.Text``;
const SwiperContainer = styled.View`
  width: 100%;
  height: ${WIDTH}px;
`;

export default ({
  loading,
  nowPlaying,
  upcoming,
  popular,
  topRated,
  nowPlayingError,
  upcomingError,
  popularError,
  topRatedError,
}) => {
  console.log(nowPlaying);

  return (
    <Container style={StyleSheet.Container}>
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <SwiperContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
              {nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  vote={movie.vote_average}
                  posterUrl={movie.poster_path}
                  backdropUrl={movie.backdrop_path}
                />
              ))}
            </Swiper>
          </SwiperContainer>
        </>
      )}
    </Container>
  );
};
