import React, { useState } from "react";
import styled from "styled-components/native";
import { Animated, PanResponder, Dimensions } from "react-native";
import PropTypes from "prop-types";
import Poster from "../Poster";
import { Platform } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const CardStyles = {
  width: Platform.OS === "web" ? `${HEIGHT / 1.7}px` : "100%",
  height: "100%",
  borderRadius: 16,
  position: "absolute",
  overflow: "hidden",
};

const Card = ({ mediaList }) => {
  const [topIndex, setTopIndex] = useState(0);
  const position = new Animated.ValueXY();
  const nextCard = () => setTopIndex((prev) => prev + 1);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: 0 });
    },
    onPanResponderRelease: (evt, { dx }) => {
      Animated.spring(position, {
        toValue: {
          x:
            dx > WIDTH / 2 ? WIDTH + 100 : dx < -WIDTH / 2 ? -(WIDTH + 100) : 0,
          y: 0,
        },
        bounciness: 8,
      }).start(nextCard);
    },
  });

  const rotationValues = position.x.interpolate({
    inputRange: [-WIDTH, 0, WIDTH],
    outputRange: [`-${WIDTH / 50}deg`, `0deg`, `${WIDTH / 50}deg`],
    extrapolate: "clamp",
  });

  const firstCardOpacity = position.x.interpolate({
    inputRange: [-WIDTH, -WIDTH / 2 - 100, 0, WIDTH / 2 + 100, WIDTH],
    outputRange: [0, 1, 1, 1, 0],
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
      {mediaList?.map((media, index) =>
        index < topIndex ? null : (
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
                  ? firstCardOpacity
                  : index === topIndex + 1
                  ? secondCardOpacity
                  : 0,
            }}
            {...panResponder.panHandlers}
          >
            <Poster posterUrl={media.poster_path || media.backdrop_path} />
          </Animated.View>
        )
      )}
    </Container>
  );
};

Card.propTypes = { mediaList: PropTypes.array };

export default Card;
