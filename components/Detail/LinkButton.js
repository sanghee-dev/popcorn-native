import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import PropTypes from "prop-types";
import * as WebBrowser from "expo-web-browser";

const Container = styled.View`
  width: 100%;
  height: 52px;
  margin-bottom: 32px;
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

const LinkButton = ({ imdb_id }) => {
  const [result, setResult] = useState(null);
  const [focus, setFocus] = useState(false);

  const handleButton = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `http://www.imdb.com/title/${imdb_id}`
    );
    setResult(result);
  };

  return (
    <Container
      style={{
        backgroundColor: focus ? "black" : "white",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setFocus((prev) => !prev);
          handleButton();
        }}
        title="IMDb"
      >
        <Title
          style={StyleSheet.Title}
          style={{ color: focus ? "white" : "black" }}
        >
          IMDb
        </Title>
      </TouchableOpacity>
    </Container>
  );
};

LinkButton.propTypes = { imdb_id: PropTypes.string.isRequired };

export default LinkButton;
