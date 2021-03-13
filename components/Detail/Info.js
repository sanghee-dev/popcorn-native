import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import Vote from "../Vote";

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
const SubInfo = styled.Text`
  margin-top: 8px;
`;
const Overview = styled.Text`
  margin-top: 8px;
`;

const Info = ({ title, overview, release, vote, runtime, adult }) => {
  return (
    <Container>
      <InfoContainer>
        <Title style={StyleSheet.Title} numberOfLines={2}>
          {title}
        </Title>

        <SubInfo style={StyleSheet.Subtitle}>
          <Title>{release.substring(0, 4)} </Title>
          <Title>
            {" 19+ "} {adult && " 19+ "}
          </Title>
          {/* <Title>
            {Math.floor(runtime / 60)}:{runtime % 60}
          </Title> */}
          <Vote vote={vote} />
        </SubInfo>
        <Overview style={StyleSheet.Subtitle} numberOfLines={5}>
          {overview}
        </Overview>
      </InfoContainer>
    </Container>
  );
};

export default Info;
