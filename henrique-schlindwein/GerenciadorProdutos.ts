import { ProdutoEcologico } from "./ProdutoEcologico";

export class GerenciadorProdutos {
    private produtos: Array<ProdutoEcologico> = new Array;

    adicionarProduto(produto: ProdutoEcologico): void {
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" cadastrado com sucesso!`);
    }

    listarProdutos(): void {
        console.log("Lista de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}
