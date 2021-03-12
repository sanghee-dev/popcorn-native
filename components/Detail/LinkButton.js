import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import * as WebBrowser from "expo-web-browser";

const Container = styled.View`
  width: 100%;
  height: 52px;
  margin-bottom: 32px;
  justify-content: center;
  border-radius: 26px;
  background-color: white;
`;
const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;
const Title = styled.Text``;

const LinkButton = ({ imdb_id }) => {
  const [result, setResult] = useState(null);

  const handleButton = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `http://www.imdb.com/title/${imdb_id}`
    );
    setResult(result);
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleButton} title="IMDb">
        <Title style={StyleSheet.Title}>IMDb</Title>
      </TouchableOpacity>
    </Container>
  );
};

export default LinkButton;
