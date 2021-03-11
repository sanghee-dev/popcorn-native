import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 32px;
`;
const SwiperContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 1.7}px;
`;
const CreditContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 1.7}px;
  overflow: hidden;
`;
const Title = styled.Text``;

const CreditSlider = ({ id, creditList }) => {
  console.log(creditList);

  return (
    <Container>
      <SwiperContainer>
        <Swiper controlsEnabled={false} loop timeout={4}>
          {creditList.map((credit) => (
            <CreditContainer key={credit.id} style={StyleSheet.BorderRadius}>
              <Title>credit</Title>
            </CreditContainer>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default CreditSlider;
