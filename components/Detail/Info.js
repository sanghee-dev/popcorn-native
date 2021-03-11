import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 32px;
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
  flex-direction: row;
  margin-right: 32px;
`;
const InfoContainer = styled.View`
  width: ${WIDTH / 2 - 32}px;
`;
const Title = styled.Text``;
const Overview = styled.Text`
  margin-top: 8px;
`;

const Info = ({ title, overview }) => {
  return (
    <Container>
      <InfoContainer>
        <Title style={StyleSheet.Title} numberOfLines={2}>
          {title}
        </Title>
        <Overview style={StyleSheet.Subtitle} numberOfLines={6}>
          {overview}
        </Overview>
      </InfoContainer>
    </Container>
  );
};

export default Info;
