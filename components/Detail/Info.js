import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Vote from "../Vote";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: ${WIDTH / 2 - 32}px;
  /* height: ${WIDTH / 2 - 32}px; */
  margin-right: 32px;
`;
const InfoContainer = styled.View`
  width: ${WIDTH / 2 - 32}px;
`;
const Title = styled.Text``;
const SubInfo = styled.Text`
  margin-top: 4px;
`;
const Overview = styled.Text``;
const MoreContainer = styled.TouchableOpacity`
  width: 80px;
  height: 22px;
  position: relative;
  left: 100px;
  bottom: 19px;
`;
const More = styled.Text`
  width: 80px;
  text-align: center;
  color: rgb(0, 255, 84);
`;

const Info = ({
  title,
  overview,
  release,
  runtime,
  adult,
  tagline,
  posterUrl,
}) => {
  const [more, setMore] = useState(false);

  return (
    <Container>
      <InfoContainer>
        <Title style={StyleSheet.Title} numberOfLines={1}>
          {title}
        </Title>

        <SubInfo style={StyleSheet.Subtitle}>
          <Title>{release.substring(0, 4)} </Title>
          <Title>{" 19+ "}</Title>
          <Title>{runtime}min</Title>
          {/* <Vote vote={vote} /> */}
        </SubInfo>

        <Overview style={StyleSheet.Subtitle} numberOfLines={more ? 16 : 7}>
          {overview}
        </Overview>

        <MoreContainer>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.1]}
            colors={["rgba(190, 184, 184, 0)", "rgba(190, 184, 184, 1)"]}
          >
            <More
              style={StyleSheet.Subtitle}
              onPress={() => setMore((prev) => !prev)}
            >
              ...More
            </More>
          </LinearGradient>
        </MoreContainer>
      </InfoContainer>
    </Container>
  );
};

export default Info;
