"use client"
import React, {useState, createContext} from "react";

interface Favoritos {
    favoritos: Produto[];
    setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<Favoritos>({
    favoritos: [],
    setFavoritos: ()=>{}
})

interface FavoritosProviderProps{
    children: React.ReactNode;
}

export default function FavoritosProvider({children}: FavoritosProviderProps){
    const [favoritos, setFavoritos] = useState<Produto[]>([]);
    const values = {
        favoritos,
        setFavoritos
    };
    
    return (
        <FavoritosContext.Provider value={values}>{children}</FavoritosContext.Provider>
    );
};