import { v4 as uuidv4 } from 'uuid';

export interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  complemento: string;
}

export interface Cliente {
  id: string;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  endereco: Endereco;
  email: string;
}

export const criarCliente = (
  nome: string,
  sobrenome: string,
  email: string,
  cpf: string,
  telefone: string,
  endereco: Endereco
): Cliente => {
  return {
    id: uuidv4(),
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf,
    telefone: telefone,
    endereco: endereco,
    email: email,
  };
};
