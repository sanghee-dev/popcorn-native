import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import Input from "../../components/Search/Input";
import Slider from "../../components/Slider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;
const ResultContainer = styled.View``;

const Presenter = ({
  loading,
  keyword,
  onChangeText,
  onSubmitEditing,
  movieResult,
  tvResult,
  movieResultError,
  tvResultError,
}) => {
  return (
    <Container style={StyleSheet.Container}>
      <Input
        keyword={keyword}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <ResultContainer
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {loading ? (
          <ActivityIndicator color="rgb(0, 255, 84)" />
        ) : (
          <>
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
