import React from "react";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import Title from "./Title";
import { View } from "react-native";

const HorizontalSlider = ({ title, children }) => {
  return (
    <View>
      <Title title={title} />
      <ScrollView
        style={{ marginTop: 15, marginBottom: 40 }}
        contentContainerStyle={{ paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};

HorizontalSlider.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
