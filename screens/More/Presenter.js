import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl, Dimensions } from "react-native";
import Vote from "../../components/Vote";
import Poster from "../../components/Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`;
const SubContainer = styled.View`
  /* padding: 16px; */
`;
const PosterContainer = styled.View`
  width: 100%;
  height: ${WIDTH * 1.55}px;
  position: absolute;
  top: 0px;
`;
const BackdropContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 2}px;
  margin-bottom: 16px;
`;
const SubInfo = styled.Text`
  margin: 4px 0 12px;
`;
const Title = styled.Text``;

export default ({
  loading,
  refreshFn,
  title,
  overview,
  release,
  vote,
  runtime,
  adult,
  posterUrl,
  backdropUrl,
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
        justifyContent: loading ? "center" : "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          {/* <PosterContainer style={StyleSheet.BorderRadius}>
            <Poster posterUrl={posterUrl} blurRadius={0} opacity={0.2} />
          </PosterContainer> */}

          <BackdropContainer style={StyleSheet.BorderRadius}>
            <Poster posterUrl={backdropUrl} blurRadius={0} />
          </BackdropContainer>

          <SubContainer>
            <Title style={StyleSheet.Title}>{title}</Title>

            <SubInfo style={StyleSheet.Subtitle}>
              {release.substring(0, 7).replaceAll("-", ".")}
              {adult && " +19 "} {runtime}min <Vote vote={vote} />
            </SubInfo>

            <Title style={StyleSheet.Subtitle}>{overview}</Title>
          </SubContainer>
        </>
      )}
    </Container>
  );
};
