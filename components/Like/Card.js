import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Animated, PanResponder, Dimensions } from "react-native";
import PropTypes from "prop-types";
import Poster from "../Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
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
  const [topIndex, setTopIndex] = useState(0);

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

  const rotationValues = position.x.interpolate({
    inputRange: [-WIDTH, 0, WIDTH],
    outputRange: [`-${WIDTH / 50}deg`, `0deg`, `${WIDTH / 50}deg`],
    extrapolate: "clamp",
  });

  const secondCardOpacity = position.x.interpolate({
    inputRange: [-WIDTH, 0, WIDTH],
    outputRange: [1, 0.2, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-WIDTH, 0, WIDTH],
    outputRange: [1, 0.7, 1],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {mediaList?.map((media, index) => {
        return (
          <Animated.View
            key={media.id}
            style={{
              ...CardStyles,
              zIndex: -index,
              transform:
                index === topIndex
                  ? [
                      { rotate: rotationValues },
                      ...position.getTranslateTransform(),
                    ]
                  : index === topIndex + 1
                  ? [{ scale: secondCardScale }]
                  : [],
              opacity:
                index === topIndex
                  ? 1
                  : index === topIndex + 1
                  ? secondCardOpacity
                  : 0,
            }}
            {...panResponder.panHandlers}
          >
            <Poster posterUrl={media.poster_path || media.backdrop_path} />
          </Animated.View>
        );
      })}
    </Container>
  );
};

Card.propTypes = { mediaList: PropTypes.array };

export default Card;
