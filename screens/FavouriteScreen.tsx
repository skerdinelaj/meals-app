import { StyleSheet, Text, View } from 'react-native'
import { FavouritesContext } from '../store/context/favourites-context'
import { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'

const FavouriteScreen = () => {
    const { favourites, totalFavourites } = useContext(FavouritesContext)

    if (totalFavourites === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourites yet.</Text>
            </View>
        )
    }

    const displayMeals = MEALS.filter((meal) => favourites.includes(meal.id))
  return (

   <MealsList displayMeals={displayMeals}/>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})