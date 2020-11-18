import React from "react";
import { StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../styles/Global";

const About = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </Text>
    </View>
  );
};

export default About;
