import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator, RefreshControl } from "react-native";
import Input from "../../components/Search/Input";
import Slider from "../../components/Slider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const ResultContainer = styled.View``;

const Presenter = ({
  loading,
  keyword,
  onChangeText,
  onSubmitEditing,
  movieResult,
  tvResult,
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
      showsHorizontalScrollIndicator={false}
    >
      <ResultContainer>
        {loading ? (
          <ActivityIndicator color="rgb(0, 255, 84)" />
        ) : (
          <>
            <Input
              keyword={keyword}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
            />
            {movieResult?.length > 0 && (
              <Slider movieList={movieResult} title="Movie Results" />
            )}
            {tvResult?.length > 0 && (
              <Slider movieList={tvResult} title="TV Shows Results" />
            )}
          </>
        )}
      </ResultContainer>
    </Container>
  );
};

export default Presenter;
