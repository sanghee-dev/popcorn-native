import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl } from "react-native";
import Slider from "../../components/Slider";
import Filter from "../../components/Home/Filter";

const Container = styled.ScrollView``;
const Title = styled.Text``;

export default ({
  loading,
  firstGenre,
  secondGenre,
  thirdGenre,
  fourthGenre,
  refreshFn,
  selectedGenre,
  setSelectedGenre,
  genres,
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
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <Filter
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            genres={genres}
          />
          <Slider
            movieList={firstGenre}
            title={Object.values(selectedGenre)[0]}
          />
          <Slider
            movieList={secondGenre}
            title={Object.values(selectedGenre)[1]}
          />
          <Slider
            movieList={thirdGenre}
            title={Object.values(selectedGenre)[2]}
          />
          <Slider
            movieList={fourthGenre}
            title={Object.values(selectedGenre)[3]}
          />
        </>
      )}
    </Container>
  );
};
