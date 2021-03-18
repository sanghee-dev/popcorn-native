import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl } from "react-native";
import Vote from "../../components/Vote";
import Backdrop from "../../components/Backdrop";

const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-top: -16px;
`;
const SubInfo = styled.Text`
  width: 100%;
  margin: 4px 0 12px;
`;
const Title = styled.Text`
  width: 100%;
  margin-top: 16px;
`;

export default ({
  loading,
  refreshFn,
  title,
  overview,
  release,
  vote,
  runtime,
  adult,
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
        alignItems: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <Backdrop backdropUrl={backdropUrl} resizeMode="cover" />
          <Title style={StyleSheet.Title}>{title}</Title>
          <SubInfo style={StyleSheet.Subtitle}>
            {release.substring(0, 7).replaceAll("-", ".")}
            {adult && " +19 "} {runtime}min <Vote vote={vote} />
          </SubInfo>
          <Title style={StyleSheet.Subtitle}>{overview}</Title>
        </>
      )}
    </Container>
  );
};
