import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-web-swiper";
import Poster from "../Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
  margin-bottom: 32px;
`;
const CompanyContainer = styled.View`
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
`;
const PosterContainer = styled.View`
  padding: 16px;
`;

const CompanySlider = ({ companies }) => {
  return (
    <Container>
      <LinearGradient
        style={StyleSheet.Gradient}
        locations={[0, 0.25, 0.75, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          "rgba(95, 95, 95, 0.6)",
          "rgba(95, 95, 95, 0)",
          "rgba(95, 95, 95, 0)",
          "rgba(95, 95, 95, 0.6)",
        ]}
      >
        <Swiper controlsEnabled={false} loop timeout={4}>
          {companies.map((company) => (
            <CompanyContainer key={company.id}>
              <PosterContainer>
                <Poster posterUrl={company.logo_path} resizeMode="contain" />
              </PosterContainer>
            </CompanyContainer>
          ))}
        </Swiper>
      </LinearGradient>
    </Container>
  );
};

export default CompanySlider;
