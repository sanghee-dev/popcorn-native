import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl } from "react-native";
import Slider from "../../components/Slider";
import SwiperSlider from "../../components/SwiperSlider";

const Container = styled.ScrollView``;

export default ({
  loading,
  nowPlaying,
  upcoming,
  popular,
  topRated,
  refreshFn,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <Container
      style={StyleSheet.Container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor="rgb(0, 255, 84)"
        />
      }
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
