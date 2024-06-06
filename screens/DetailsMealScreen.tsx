import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DetailsMealScreenRouteProp } from "./navigationType";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetal/Subtitle";
import List from "../components/MealDetal/List";

type DetailsMealScreenProps = {
  route: DetailsMealScreenRouteProp;
};

const DetailsMealScreen = ({ route }: DetailsMealScreenProps) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)!;
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMeal;
  return (
    <ScrollView style={styles.rootContainer}> 
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealsDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={ingredients}/>
        <Subtitle>Steps</Subtitle>
        <List data={steps} />
      </View>
    </ScrollView>
  );
};

export default DetailsMealScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});
