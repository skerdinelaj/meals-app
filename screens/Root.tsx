import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./CategoriesScreen";
import MealsOverviewScreen from "./MealsOverviewScreen";
import { RootStackParamList } from "./navigationType";
import DetailsMealScreen from "./DetailsMealScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import FavouriteScreen from "./FavouriteScreen";

const Root = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator();
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          sceneContainerStyle: {
            backgroundColor: "#3f2f25",
          },
          drawerContentStyle: {
            backgroundColor: "#351401",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="DrawerCategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="DrawerFavouriteScreen"
          component={FavouriteScreen}
          options={{
            title: "Favourites",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
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
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
          options={({ route }) => {
            const { categoryId } = route.params;
            return {
              title: categoryId,
            };
          }}
        />
        <Stack.Screen
          name="DetailsMealScreen"
          component={DetailsMealScreen}
          options={{
            headerRight: () => {
              return <Button title="Tap me!"></Button>;
            },
            title: "About the Meal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
