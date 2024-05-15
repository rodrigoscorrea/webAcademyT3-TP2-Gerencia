import { useContext } from "react";
import { FavoritosContext } from "../components/FavoritosProvider/FavoritosProvider";

export default function useFavoritosContext(){
    const favoritosContext = useContext(FavoritosContext);
    return favoritosContext;
}