import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import Slider from "../../components/Slider";
import SwiperSlider from "../../components/SwiperSlider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;

export default ({
  loading,
  airingToday,
  onTheAir,
  popular,
  topRated,
  airingTodayError,
  onTheAirError,
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
          <SwiperSlider movieList={airingToday} />
          <Slider movieList={onTheAir} title="On The Air Shows" />
          <Slider movieList={popular} title="Popular Shows" />
          <Slider movieList={topRated} title="Top Rated Shows" />
        </>
      )}
    </Container>
  );
};
