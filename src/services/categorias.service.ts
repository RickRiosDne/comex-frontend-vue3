import http from './http/api';

export default {
  getCategorias: async () => {
    try {
      const data = await http.get(`categorias`);
      return data.data;
    } catch (err) {
      return await Promise.reject(err);
    }
  },

  insertCategorias: async (params: Object) => {
    try {
      const data = await http.post(`categorias`, params);
      return data.data;
    } catch (err) {
      return await Promise.reject(err);
    }
  },

  deleteCategorias: async (params: string) => {
    try {
      const data = await http.delete(`categorias/${params}`);
      return data.data;
    } catch (err) {
      return await Promise.reject(err);
    }
  },

  //   getUser() {
  //     console.log(http);
  //     http
  //       .get('/categorias')
  //       .then((res) => {
  //         return res.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
};
