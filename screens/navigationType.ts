import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    CategoriesScreen: undefined;
    MealsOverviewScreen: { categoryId: string };
    DetailsMealScreen: { mealId: string };
};

export type MealsOverviewScreenRouteProp = RouteProp<RootStackParamList, 'MealsOverviewScreen'>;
export type DetailsMealScreenRouteProp = RouteProp<RootStackParamList, 'DetailsMealScreen'>;
export type MealsOverviewScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "MealsOverviewScreen">;
export type CategoriesScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "CategoriesScreen">;
export type DetailsMealScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "DetailsMealScreen">;