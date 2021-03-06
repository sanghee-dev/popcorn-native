import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextInput = styled.TextInput`
  flex: 1;
  height: 48px;
  border-color: rgb(95, 95, 95);
  border-width: 1px;
  padding-left: 32px;
  padding-right: 16px;
  border-radius: 24px;
  font-size: 20px;
`;
const SearchIcon = styled.View`
  position: absolute;
  left: 8px;
`;

const Input = ({ keyword, onChangeText, onSubmitEditing }) => {
  return (
    <Container>
      <SearchIcon>
        <Ionicons name="search" size={20} color="rgb(95, 95, 95)" />
      </SearchIcon>
      <TextInput
        value={keyword}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder="Search Movies or TV shows"
        placeholderTextColor="rgb(95, 95, 95)"
        returnKeyType="search"
        clearTextOnFocus={true}
        maxLength={24}
      />
    </Container>
  );
};

Input.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
