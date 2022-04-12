import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import propTypes from "prop-types";
import { images } from "../images";

const Icon = styled.Image`
  tint-color: ${({ theme }) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({ type, onPressOut, id }) => {
  const _onPressOut = () => {
    onPressOut(id);
  };

  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};

IconButton.propTypes = {
  type: propTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: propTypes.func,
  id: propTypes.string,
};

export default IconButton;
