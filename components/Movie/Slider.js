import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import Slide from "./Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 16px;
`;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const Title = styled.Text`
  margin-bottom: 8px;
`;

const Slider = ({ movieList, title = "Title" }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>{title}</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movieList.map((movie) => (
          <Slide
            title={movie.title}
            posterUrl={movie.poster_path}
            vote={movie.vote_average}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Slider;
