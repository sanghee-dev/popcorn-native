import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.ScrollView`
  height: 44px;
  flex-direction: row;
  margin-bottom: 32px;
`;
const Button = styled.TouchableOpacity`
  height: 28px;
  border-radius: 20px;
  padding: 7px 10px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
const Title = styled.Text`
  font-family: "ObjectSans-Regular";
  font-size: 16px;
`;

const Filter = ({ selectedArray, setSelectedArray, genres }) => {
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

  return (
    <Container horizontal={true} showsVerticalScrollIndicator={true}>
      {Object.keys(genres).map((genre) => (
        <Button
          key={genre}
          style={{
            backgroundColor: selectedArray.includes(genre)
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
          }}
          onPress={() => onPress(genre, selectedArray, setSelectedArray)}
        >
          <Title
            style={{
              color: selectedArray.includes(genre)
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(0, 0, 0, 0.9)",
            }}
          >
            {genre}
          </Title>
        </Button>
      ))}
    </Container>
  );
};

Filter.propTypes = {
  genre: PropTypes.string,
  selectedArray: PropTypes.array,
  setSelectedArray: PropTypes.func,
};

export default Filter;
