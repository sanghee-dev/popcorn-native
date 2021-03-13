import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";

const Container = styled.ScrollView`
  width: 100%;
  height: 60px;
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  height: 24px;
  border-radius: 20px;
  border: 1px solid black;
  padding: 4px 8px;
  margin-right: 4px;
`;
const Title = styled.Text``;

// {
//   16: "animated",
//   14: "fantasy",
//   35: "comedy",
//   12: "adventure",
// }

const Filter = ({ selectedGenre, setSelectedGenre, genres }) => {
  console.log(genres);

  return (
    <Container horizontal={true}>
      {Object.values(genres).map((genre) => (
        <Button
          key={genre}
          style={{
            backgroundColor: Object.values(selectedGenre).includes(genre)
              ? "rgb(0, 255, 84)"
              : "transparent",
          }}
        >
          <Title style={StyleSheet.Text}>{genre}</Title>
        </Button>
      ))}
    </Container>
  );
};

export default Filter;
