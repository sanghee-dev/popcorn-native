import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
  margin-bottom: 32px;
  margin-right: 32px;
`;
const Author = styled.Text`
  color: "rgb(95, 95, 95)";
  margin-bottom: 4px;
`;
const Title = styled.Text`
  margin-bottom: 4px;
`;
const ReviewContainer = styled.View`
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
`;

const ReviewSlider = ({ reviews }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>Reviews</Title>
      <Swiper controlsEnabled={false} loop timeout={4}>
        {reviews.map((review) => (
          <ReviewContainer key={review.id}>
            <Author style={StyleSheet.Subtitle} numberOfLines={1}>
              {review.author}
            </Author>
            <Title style={StyleSheet.Subtitle} numberOfLines={6}>
              {review.content}
            </Title>
          </ReviewContainer>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReviewSlider;
