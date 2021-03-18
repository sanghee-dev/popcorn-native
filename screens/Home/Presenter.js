import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl } from "react-native";
import Slider from "../../components/Slider";
import Filter from "../../components/Home/Filter";
import TopButton from "../../components/TopButton";

const Container = styled.View``;
const ScrollView = styled.ScrollView``;

export default ({
  loading,
  firstGenre,
  secondGenre,
  thirdGenre,
  fourthGenre,
  refreshFn,
  selectedArray,
  setSelectedArray,
  genres,
}) => {
  const scrollRef = useRef();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={StyleSheet.Container}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor="rgb(0, 255, 84)"
        />
      }
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <Container>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Filter
              selectedArray={selectedArray}
              setSelectedArray={setSelectedArray}
              genres={genres}
            />
            <ScrollView>
              <Slider movieList={firstGenre} title={selectedArray[0]} />
              <Slider movieList={secondGenre} title={selectedArray[1]} />
              <Slider movieList={thirdGenre} title={selectedArray[2]} />
              <Slider movieList={fourthGenre} title={selectedArray[3]} />
            </ScrollView>
          </ScrollView>
          <TopButton scrollRef={scrollRef} />
        </Container>
      )}
    </ScrollView>
  );
};
