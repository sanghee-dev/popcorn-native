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
  height: ${WIDTH / 2 - 32}px;
`;
const CreditContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 2 - 32}px;
  overflow: hidden;
  flex-direction: row;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 32px;
`;
const Info = styled.View`
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
`;
const ActorName = styled.Text`
  color: "rgb(95, 95, 95)";
`;
const Title = styled.Text``;

const CreditSlider = ({ creditList }) => {
  return (
    <Container>
      <Title style={StyleSheet.Title}>Credits</Title>
      <SwiperContainer>
        <Swiper controlsEnabled={false} loop timeout={4}>
          {creditList.map((credit) => (
            <CreditContainer key={credit.id} style={StyleSheet.BorderRadius}>
              <PosterContainer>
                <Poster posterUrl={credit.profile_path} />
              </PosterContainer>
              <Info>
                <Title style={StyleSheet.Subtitle}>{credit.character}</Title>
                <ActorName style={StyleSheet.Subtitle}>
                  {credit.original_name}
                </ActorName>
              </Info>
            </CreditContainer>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default CreditSlider;
