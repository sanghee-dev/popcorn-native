import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Animated, PanResponder } from "react-native";
import PropTypes from "prop-types";
import Poster from "../Poster";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Title = styled.Text``;
const CardView = styled.View`
  width: 100%;
  height: 100%;
`;

const Card = ({ mediaList }) => {
  console.log(mediaList);

  return (
    <Container>
      {mediaList?.reverse().map((media) => {
        return (
          <CardView key={media.id} style={StyleSheet.BorderRadius}>
            <Poster posterUrl={media.poster_path || media.backdrop_path} />
          </CardView>
        );
      })}
    </Container>
  );
};

Card.propTypes = { mediaList: PropTypes.array };

export default Card;
