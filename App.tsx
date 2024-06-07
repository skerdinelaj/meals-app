import { StatusBar } from "react-native";
import Root from "./screens/Root";
import FavouritesContextProvider from "./store/context/favourites-context";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <FavouritesContextProvider>
        <Root />
      </FavouritesContextProvider>
    </GestureHandlerRootView>
  );
}
