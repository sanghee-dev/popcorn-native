import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import Slider from "../../components/Movie/Slider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;

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
          <Slider movieList={nowPlaying} title="Now Playing Movies" />
          <Slider movieList={upcoming} title="Upcoming Movies" />
          <Slider movieList={popular} title="Popular Movies" />
          <Slider movieList={topRated} title="Top Rated Movies" />
        </>
      )}
    </Container>
  );
};
