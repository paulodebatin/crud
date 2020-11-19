import http from "../http-common";

export default class CrudService {

  constructor (nomeEntidade) {
    this.nomeEntidade = nomeEntidade
 
  }

  getAll() {
    return http.get(`/${this.nomeEntidade}`);
  }

  get(id) {
    return http.get(`/${this.nomeEntidade}/${id}`);
  }

  create(data) {
    return http.post(`/${this.nomeEntidade}`, data);
  }

  update(id, data) {
    return http.put(`/${this.nomeEntidade}/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${this.nomeEntidade}/${id}`);
  }


}

