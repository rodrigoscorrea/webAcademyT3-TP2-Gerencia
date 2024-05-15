import useFavoritosContext from "./useFavoritosContext";

export default function useProdutosFavoritos(id:string){
    const contexto = useFavoritosContext();
    return contexto.favoritos.some((item)=>item.id === id);
}