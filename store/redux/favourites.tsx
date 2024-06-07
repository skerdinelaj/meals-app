import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavouritesState = {
    favourites: string[];
    iconToggle: boolean;
    favouriteMeals: number
};

const initialState: FavouritesState = {
    favourites: [],
    iconToggle: false,
    favouriteMeals: 0
};

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            state.iconToggle = true;
            state.favouriteMeals = state.favourites.length
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites.splice(state.favourites.indexOf(action.payload), 1);
            state.iconToggle = false;
            state.favouriteMeals = state.favourites.length
        },
    },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;