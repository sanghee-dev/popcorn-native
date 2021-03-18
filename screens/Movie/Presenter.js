import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl } from "react-native";
import Slider from "../../components/Slider";
import SwiperSlider from "../../components/SwiperSlider";
import TopButton from "../../components/TopButton";

const Container = styled.ScrollView``;

export default ({
  loading,
  nowPlaying,
  upcoming,
  popular,
  topRated,
  refreshFn,
}) => {
  const scrollRef = useRef();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <Container
      ref={scrollRef}
      style={StyleSheet.Container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor="rgb(0, 255, 84)"
        />
      }
      showsHorizontalScrollIndicator={false}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <SwiperSlider movieList={nowPlaying} />
          <Slider movieList={upcoming} title="Upcoming Movies" />
          <Slider movieList={popular} title="Popular Movies" />
          <Slider movieList={topRated} title="Top Rated Movies" />
          <TopButton scrollRef={scrollRef} />
        </>
      )}
    </Container>
  );
};
