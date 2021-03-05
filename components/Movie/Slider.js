import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Poster from "../Poster";
import Vote from "../Vote";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 16px;
`;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const Movie = styled.View`
  width: ${WIDTH / 3}px;
  margin-right: 16px;
  margin-bottom: 16px;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 2}px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;
const Info = styled.View`
  width: 100%;
`;
const Title = styled.Text`
  margin-bottom: 8px;
`;

const Slide = ({ movieList, title = "Title" }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title style={StyleSheet.Title}>{title}</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movieList.map((movie) => (
          <Movie>
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <PosterContainer>
                <Poster posterUrl={movie.poster_path} />
              </PosterContainer>
            </TouchableOpacity>

            <Info>
              <Title style={StyleSheet.Title} numberOfLines={1}>
                {movie.title}
              </Title>
              <Vote vote={movie.vote_average} />
            </Info>
          </Movie>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Slide;
