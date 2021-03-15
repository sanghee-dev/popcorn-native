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
  border-radius: 8px;
  overflow: hidden;
`;

const CardStyles = {
  width: "100%",
  height: "100%",
  borderRadius: 16,
  position: "absolute",
  overflow: "hidden",
};

const Card = ({ mediaList }) => {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
        bounciness: 8,
      }).start();
    },
  });

  return (
    <Container>
      {mediaList?.reverse().map((media) => (
        <Animated.View
          key={media.id}
          style={{
            ...CardStyles,
            transform: [...position.getTranslateTransform()],
          }}
          {...panResponder.panHandlers}
        >
          <Poster posterUrl={media.poster_path || media.backdrop_path} />
        </Animated.View>
      ))}
    </Container>
  );
};

Card.propTypes = { mediaList: PropTypes.array };

export default Card;
