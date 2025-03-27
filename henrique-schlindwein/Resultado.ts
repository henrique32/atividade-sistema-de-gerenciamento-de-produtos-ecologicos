import { AlimentoOrganico } from "./AlimentoOrganico";
import { ProdutoLimpezaBiodegradavel } from "./ProdutolimpezaBiodegradavel";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { GerenciadorProdutos } from "./GerenciadorProdutos";

const gerenciador = new GerenciadorProdutos();

const maca = new AlimentoOrganico("Maçã Orgânica", 5.99, new Date("2024-12-31"));
const detergente = new ProdutoLimpezaBiodegradavel("Detergente Natural", 12.50, 500);
const vaso = new ItemDecoracaoSustentavel("Vaso de Vidro", 29.90, "Vidro Reciclado");

maca.exibirDetalhes();
detergente.exibirDetalhes();
vaso.exibirDetalhes()

gerenciador.adicionarProduto(maca);
gerenciador.adicionarProduto(detergente);
gerenciador.adicionarProduto(vaso);

gerenciador.listarProdutos();