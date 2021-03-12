import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl, Dimensions } from "react-native";
import Poster from "../../components/Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;
const Card = styled.View`
  width: ${WIDTH - 32}px;
  height: ${HEIGHT - 130}px;
  position: absolute;
`;

export default ({ loading, discover, refreshFn }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  console.log(discover);

  return (
    <Container
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
        <>
          <Card>
            {discover.reverse().map((movie, index) => {
              return (
                <Card key={index} style={StyleSheet.BorderRadius}>
                  <Poster posterUrl={movie.poster_path} />
                  <Title style={StyleSheet.Title}>{movie.original_title}</Title>
                </Card>
              );
            })}
          </Card>
        </>
      )}
    </Container>
  );
};
