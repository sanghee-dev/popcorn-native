import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { ActivityIndicator, RefreshControl } from "react-native";
import Input from "../../components/Search/Input";
import Slider from "../../components/Slider";
import TopButton from "../../components/TopButton";

const Container = styled.View``;
const ScrollView = styled.ScrollView``;
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
      showsHorizontalScrollIndicator={false}
    >
      <ResultContainer>
        {loading ? (
          <ActivityIndicator color="rgb(0, 255, 84)" />
        ) : (
          <Container>
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
            {movieResult?.length > 0 && <TopButton scrollRef={scrollRef} />}
          </Container>
        )}
      </ResultContainer>
    </ScrollView>
  );
};

export default Presenter;
