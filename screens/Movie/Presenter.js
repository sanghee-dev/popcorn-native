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
  return (
    <Container style={StyleSheet.Container}>
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <Slide movieList={nowPlaying} />
        </>
      )}
    </Container>
  );
};
