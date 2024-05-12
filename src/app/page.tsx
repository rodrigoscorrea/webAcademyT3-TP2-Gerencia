"use client";

import { useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { createContext } from "react";

interface ContextFavoritos {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<ContextFavoritos>({
  favoritos : [],
  setFavoritos: () => {},
});

export default function App() {
  const produtos = mockProdutos;
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <main>
      <div className="container p-5">
        <FavoritosContext.Provider value={{favoritos, setFavoritos}}>
          <ListagemProdutos
            produtos={produtos}
          />
        </FavoritosContext.Provider>
        
      </div>
    </main>
  );
}
