import { v4 as uuidv4 } from 'uuid';

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  quantidadeEmEstoque: string;
  categoria: string;
  url?: string;
  criacao: string;
}

export const criarProduto = (
  nome: string,
  descricao: string,
  preco: number,
  quantidadeEmEstoque: string,
  categoria: string,
  url: string
): Produto => {
  return {
    id: uuidv4(),
    nome: nome,
    descricao: descricao,
    preco: preco,
    quantidadeEmEstoque: quantidadeEmEstoque,
    categoria: categoria,
    url: url,
    criacao: new Date().toISOString().substring(0, 10),
  };
};
