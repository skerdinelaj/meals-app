import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGreedTile from "../components/CategoryGreedTile";
import { CategoriesScreenNavigationProps } from "./navigationType";

type CategoryGreedTileProps = {
    navigation: CategoriesScreenNavigationProps
};

const CategoriesScreen = ({navigation}: CategoryGreedTileProps) => {
    const pressHandler = (id: string) => {
        navigation.navigate('MealsOverviewScreen', {
            categoryId: id
        })
    }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGreedTile
            id={item.id}
            onPress={() => pressHandler(item.id)}
            title={item.title}
            color={item.color}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
