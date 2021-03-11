import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import Slide from "./Slide";

const Container = styled.View`
  margin-bottom: 32px;
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
            key={movie.id}
            id={movie.id}
            title={movie.title || movie.name}
            posterUrl={movie.poster_path}
            backdropUrl={movie.backdrop_path}
            vote={movie.vote_average}
            overview={movie.overview}
            release={movie.release_date}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Slider;
