import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import Slider from "../../components/Slider";
import SwiperSlider from "../../components/SwiperSlider";

const Container = styled.ScrollView``;

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
    <Container
      style={StyleSheet.Container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <SwiperSlider movieList={nowPlaying} />
          <Slider movieList={nowPlaying} title="Now Playing Movies" />
          <Slider movieList={upcoming} title="Upcoming Movies" />
          <Slider movieList={popular} title="Popular Movies" />
          <Slider movieList={topRated} title="Top Rated Movies" />
        </>
      )}
    </Container>
  );
};
