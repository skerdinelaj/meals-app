import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./CategoriesScreen";
import MealsOverviewScreen from "./MealsOverviewScreen";
import { RootStackParamList } from "./navigationType";
import DetailsMealScreen from "./DetailsMealScreen";

import React from "react";

const Root = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#3f2f25",
          },
        }}
      >
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
          options={({ route, navigation }) => {
            const { categoryId } = route.params;
            return {
              title: categoryId,
            };
          }}
        />
        <Stack.Screen
          name="DetailsMealScreen"
          component={DetailsMealScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
