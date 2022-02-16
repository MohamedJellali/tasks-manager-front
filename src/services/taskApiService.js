import axios from "axios";

class TaskApiService {

    constructor() {
    }

    find() {
        return axios.get('http://localhost:3001/api/task/find');
    }

    findById(data) {
        return this.setHeaderToken().post('http://localhost:3001/api/task/findById', data);
    }

    save(data) {
        return this.setHeaderToken().post('http://localhost:3001/api/task/save', data);
    }

    update(data) {
        return this.setHeaderToken().put('http://localhost:3001/api/task/update', data);
    }

    delete(data) {
        return this.setHeaderToken().post('http://localhost:3001/api/task/delete', data);
    }

    setHeaderToken() {
        return axios.create({
            headers: {'Authorization': 'Bearer '}
        });
    };

}

const taskApiService = new TaskApiService();


export default taskApiService;