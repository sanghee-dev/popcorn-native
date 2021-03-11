import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import Poster from "../Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 32px;
`;
const SwiperContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 3}px;
`;
const CreditContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 3}px;
  overflow: hidden;
  flex-direction: row;
`;
const Info = styled.View`
  width: ${(WIDTH / 3) * 2 - 32}px;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 3}px;
  border-radius: 8px;
  overflow: hidden;
`;
const AirDate = styled.Text`
  color: "rgb(95, 95, 95)";
`;
const Title = styled.Text``;

const CollectionSlider = ({ collectionList }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>Collection</Title>
      <SwiperContainer>
        <Swiper controlsEnabled={false} loop timeout={4}>
          {collectionList?.map((collection) => (
            <CreditContainer
              key={collection.id}
              style={StyleSheet.BorderRadius}
            >
              <Info>
                <Title style={StyleSheet.Subtitle}>{collection.name}</Title>
                <AirDate style={StyleSheet.Subtitle}>
                  {collection.air_date.substring(2).replaceAll("-", ".")}
                </AirDate>
              </Info>
              <PosterContainer>
                <Poster posterUrl={collection.poster_path} />
              </PosterContainer>
            </CreditContainer>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default CollectionSlider;
