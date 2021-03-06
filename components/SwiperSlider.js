import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import SwiperSlide from "./SwiperSlide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 64px;
`;
const SwiperContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 1.5}px;
`;

const SwiperSlider = ({ isTV = false, movieList }) => {
  return (
    <Container>
      <SwiperContainer>
        <Swiper controlsEnabled={false} loop timeout={4}>
          {movieList.map((movie) => (
            <SwiperSlide
              isTV={isTV}
              key={movie.id}
              id={movie.id}
              title={movie.title || movie.name}
              posterUrl={movie.poster_path}
              backdropUrl={movie.backdrop_path}
              vote={movie.vote_average}
              overview={movie.overview}
              release={movie.release_date}
            />
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default SwiperSlider;
