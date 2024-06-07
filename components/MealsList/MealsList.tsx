import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from './MealItem';

type MealItemProps = {
    displayMeals: {
        title: string;
        imageUrl: string;
        duration: number;
        complexity: string;
        affordability: string;
        id: string;
    }[]
};

const MealsList = ({displayMeals}: MealItemProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            imageURL={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            id={item.id}
          />
        )}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });