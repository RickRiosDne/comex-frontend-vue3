import http from './http/api';

export default {
  //     fetch('http://localhost:3000/clientes', {
  //             method: 'POST', // or 'PUT'
  //             headers: { 'Content-Type': 'application/json' },
  //             body: JSON.stringify(novoCliente),
  //         })
  //         .then((response) => response.json())
  //         .then((data) => {
  //             console.log(`${data.nome}(CPF: ${data.cpf}) cadastrada com sucesso.`);
  //         })
  //         .catch((error) => {
  //             console.error('Não foi possível cadastrar o cliente! Aguarde uns minutos e tente novamente.');
  //         });

  // //   console.log('novoCliente', novoCliente)

  insertClientes: async (params: any) => {
    try {
      const data = await http.post(`clientes`, params);
      return data.data;
    } catch (err) {
      return await Promise.reject(err);
    }
  },
};
