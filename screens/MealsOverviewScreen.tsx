import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import {
  MealsOverviewScreenRouteProp as MealsRouteProp,
  MealsOverviewScreenNavigationProps,
} from "./navigationType";
import MealsList from "../components/MealsList/MealsList";

type MealsOverviewScreenProps = {
  route: MealsRouteProp;
  navigation: MealsOverviewScreenNavigationProps;
};

const MealsOverviewScreen = ({
  route,
  navigation,
}: MealsOverviewScreenProps) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )!.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <MealsList displayMeals={displayMeals} />
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
