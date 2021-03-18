import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
`;

const TopButton = ({ scrollRef }) => {
  const [focus, setFocus] = useState(false);
  const onPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <Container
      onPress={() => {
        setFocus((prev) => !prev);
        onPress();
      }}
      style={{
        backgroundColor: focus ? "black" : "white",
      }}
    >
      <Ionicons
        name="arrow-up-outline"
        style={{
          fontSize: 28,
          color: focus ? "white" : "black",
        }}
      />
    </Container>
  );
};

TopButton.propTypes = {
  posterUrl: PropTypes.string,
};

export default TopButton;
