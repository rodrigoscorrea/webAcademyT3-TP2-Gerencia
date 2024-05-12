import { useContext } from "react";
import CardProduto from "../CardProduto/CardProduto";
import ResumoFavoritos from "../ResumoFavoritos/ResumoFavoritos";
import { FavoritosContext } from "@/app/page";

interface IListagemProdutos {
  produtos: Produto[];
}

export default function ListagemProdutos({
  produtos,
}: IListagemProdutos) {
  const contexto = useContext(FavoritosContext);
  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            setFavoritos={contexto.setFavoritos}
            favoritos={contexto.favoritos}
          />
        ))}
      </div>

      <ResumoFavoritos favoritos={contexto.favoritos} setFavoritos={contexto.setFavoritos} />
    </>
  );
}
