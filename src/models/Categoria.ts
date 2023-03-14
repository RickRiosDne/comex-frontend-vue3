import { v4 as uuidv4 } from 'uuid';

export interface Categoria {
    uuid: string;
    nome: string;
    criacao: string;
    status: string;
}

export const criarCategoria = (nome: string): Categoria => {
    return {
        uuid: uuidv4(),
        nome: nome,
        criacao: new Date().toISOString().substring(0, 10),
        status: 'Ativa'
    };
};





