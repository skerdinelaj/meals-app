import { StatusBar } from "react-native";
import Root from "./screens/Root";
//import FavouritesContextProvider from "./store/context/favourites-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <Root/>
      </Provider>
      {/* <FavouritesContextProvider>
        <Root />
      </FavouritesContextProvider> */}
    </GestureHandlerRootView>
  );
}
