import http from './http/api';

export default {
  insertClientes: async (params: any) => {
    try {
      const data = await http.post(`clientes`, params);
      return data.data;
    } catch (err) {
      return await Promise.reject(err);
    }
  },
};
