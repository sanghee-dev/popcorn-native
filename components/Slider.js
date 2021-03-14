import React from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import Slide from "./Slide";
import { Platform } from "react-native";

const Container = styled.View`
  margin-bottom: 32px;
`;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const Title = styled.Text`
  margin-bottom: 8px;
`;

const Slider = ({ isTV = false, movieList, title = "Title" }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>{title}</Title>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      >
        {movieList.map((movie) => (
          <Slide
            key={movie.id}
            id={movie.id}
            title={movie.title || movie.name}
            posterUrl={movie.poster_path}
            backdropUrl={movie.backdrop_path}
            vote={movie.vote_average}
            overview={movie.overview}
            release={movie.release_date}
            isTV={isTV}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Slider;
