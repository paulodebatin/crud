import http from "../http-common";

class CrudService {
 

  getAll(nomeEntidade) {
    return http.get(`/${nomeEntidade}`);
  }

  get(nomeEntidade,id) {
    return http.get(`/${nomeEntidade}/${id}`);
  }

  create(nomeEntidade,data) {
    return http.post(`/${nomeEntidade}`, data);
  }

  update(nomeEntidade, id, data) {
    return http.put(`/${nomeEntidade}/${id}`, data);
  }

  delete(nomeEntidade,id) {
    return http.delete(`/${nomeEntidade}/${id}`);
  }


}

export default new CrudService();