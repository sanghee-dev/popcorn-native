import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl, Dimensions } from "react-native";
import Card from "../../components/Like/Card";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const CardContainer = styled.View`
  width: ${WIDTH - 32}px;
  height: ${HEIGHT - 130}px;
  position: absolute;
`;

export default ({ loading, movieTrend, tvTrend, refreshFn }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

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
          <CardContainer>
            <Card
              mediaList={movieTrend
                .map((element, index) => [element, tvTrend[index]])
                .flat()}
            />
          </CardContainer>
        </>
      )}
    </Container>
  );
};
