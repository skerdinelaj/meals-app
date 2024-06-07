import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DetailsMealScreenNavigationProps } from "../../screens/navigationType";
import MealsDetails from "../MealsDetails";

type MealItemProps = {
  title: string;
  imageURL: string;
  duration: number;
  complexity: string;
  affordability: string;
  id: string;
};

const MealItem = ({
  title,
  imageURL,
  duration,
  complexity,
  affordability,
  id,
}: MealItemProps) => {
  const navigation = useNavigation< DetailsMealScreenNavigationProps>();

  const selectMealItemHandler = () => {
    navigation.navigate("DetailsMealScreen", {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageURL }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
