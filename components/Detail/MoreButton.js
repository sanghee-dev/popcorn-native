import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 52px;
  margin-bottom: 16px;
  justify-content: center;
  border-radius: 26px;
`;
const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20;
  line-height: 21;
`;

const MoreButton = ({
  title,
  overview,
  release,
  vote,
  runtime,
  adult,
  posterUrl,
  backdropUrl,
}) => {
  const [result, setResult] = useState(null);
  const [focus, setFocus] = useState(false);
  const navigation = useNavigation();

  return (
    <Container
      style={{
        backgroundColor: focus ? "black" : "white",
      }}
    >
      <TouchableOpacity
        onPress={() => {}}
        title="IMDb"
        onPress={() => {
          setFocus((prev) => !prev);
          navigation.navigate("More", {
            title,
            overview,
            release,
            vote,
            runtime,
            adult,
            posterUrl,
            backdropUrl,
          });
        }}
      >
        <Title
          style={StyleSheet.Title}
          style={{ color: focus ? "white" : "black" }}
        >
          More
        </Title>
      </TouchableOpacity>
    </Container>
  );
};

export default MoreButton;
