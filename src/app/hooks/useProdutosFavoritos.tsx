import useFavoritosContext from "./useFavoritosContext";

export default function useProdutosFavoritos(){
    const contexto = useFavoritosContext();
    return contexto.favoritos;
}