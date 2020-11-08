import http from "../http-common";

class CrudService {
 

  constructor(entidadeNome) {
    this.entidadeNome = entidadeNome
  }  

  getAll() {
    return http.get("/pessoas");
  }

  get(id) {
    return http.get(`/pessoas/${id}`);
  }

  create(data) {
    return http.post("/pessoas", data);
  }

  update(id, data) {
    return http.put(`/pessoas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pessoas/${id}`);
  }


}

export default new CrudService();