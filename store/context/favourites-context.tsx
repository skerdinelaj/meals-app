// import { createContext } from "react";
// import { ReactNode, useState } from "react";

// type FavouritesContextType = {
//     favourites: string[];
//     totalFavourites: number;
//     iconFavourite: boolean;
//     addFavourite: (id: string) => void;
//     removeFavourite: (id: string) => void;
// }

// export const FavouritesContext = createContext<FavouritesContextType>({
//     favourites: [],
//     totalFavourites: 0,
//     iconFavourite: false,
//     addFavourite: (id: string) => {},
//     removeFavourite: (id: string) => {},
// });

// type FavouritesContextProviderProps = {
//     children: ReactNode
// }

// function FavouritesContextProvider({ children }: FavouritesContextProviderProps) {
//     const [favourites, setFavourites] = useState<string[]>([]);
//     const [iconFavourite, setIconFavourite] = useState(false);
    
//     const addFavourite = (id: string) => {
//         setFavourites(prev => [...prev, id]);
//         setIconFavourite(true);
//     }

//     const removeFavourite = (id: string) => {
//         setFavourites(prev => prev.filter(mealId => mealId !== id));
//         setIconFavourite(false);
//     }

//     const contextValue = {
//         favourites,
//         totalFavourites: favourites.length,
//         addFavourite,
//         removeFavourite,
//         iconFavourite
//     }

//     return (
//         <FavouritesContext.Provider value={contextValue}>
//             {children}
//         </FavouritesContext.Provider>
//     );
// }

// export default FavouritesContextProvider


