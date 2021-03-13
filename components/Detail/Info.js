import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Vote from "../Vote";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 32px;
  width: ${WIDTH / 2 - 32}px;
  height: ${WIDTH / 2 - 32}px;
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
  left: 96px;
  bottom: 19px;
`;
const More = styled.Text`
  width: 80px;
  text-align: right;
  color: rgb(0, 255, 84);
`;

const Info = ({ title, overview, release, vote, runtime, adult, tagline }) => {
  const navigation = useNavigation();

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
          <Title>
            {Math.floor(runtime / 60)}:{runtime % 60}
          </Title>
          {/* <Vote vote={vote} /> */}
        </SubInfo>

        <Overview style={StyleSheet.Subtitle} numberOfLines={6}>
          {overview}
        </Overview>

        <MoreContainer
          onPress={() =>
            navigation.navigate("More", {
              overview,
              tagline,
            })
          }
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.25]}
            colors={["rgba(190, 184, 184, 0)", "rgba(190, 184, 184, 1)"]}
          >
            <More style={StyleSheet.Subtitle}> ...More</More>
          </LinearGradient>
        </MoreContainer>
      </InfoContainer>
    </Container>
  );
};

export default Info;
