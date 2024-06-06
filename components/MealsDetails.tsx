import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";

type MealsDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const MealsDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle
}: MealsDetailsProps) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },
  detailsItem: {
    fontSize: 12,
  },
});
