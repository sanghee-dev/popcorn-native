import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";

const Container = styled.ScrollView`
  height: 42px;
  flex-direction: row;
  margin-bottom: 32px;
`;
const Button = styled.TouchableOpacity`
  height: 24px;
  border-radius: 20px;
  border: 1px solid black;
  padding: 4px 8px;
  margin-right: 4px;
`;
const Title = styled.Text``;

const onPress = (genre, selectedArray, setSelectedArray) => {
  if (!selectedArray.includes(genre)) {
    setSelectedArray((prev) => {
      const newSelectedArray = [...prev];
      newSelectedArray.unshift(genre);
      newSelectedArray.pop();
      return newSelectedArray;
    });
  }
};

const Filter = ({ selectedArray, setSelectedArray, genres }) => {
  return (
    <Container horizontal={true} showsVerticalScrollIndicator={true}>
      {Object.keys(genres).map((genre) => (
        <Button
          key={genre}
          style={{
            backgroundColor: selectedArray.includes(genre)
              ? "rgb(0, 255, 84)"
              : "transparent",
          }}
          onPress={() => onPress(genre, selectedArray, setSelectedArray)}
        >
          <Title style={StyleSheet.Text}>{genre}</Title>
        </Button>
      ))}
    </Container>
  );
};

export default Filter;
