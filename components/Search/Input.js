import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px;
  padding: 5px 20px;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType={"search"}
    ></TextInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
