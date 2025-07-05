import createApiClient from './api.service';

class ContactService {
    constructor(baseUrl = '/api/contacts') {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        const response = await this.api.get('/');
        return response.data;
    }

    async create(data) {
        const response = await this.api.post('/', data);
        return response.data;
    }

    async deleteAll() {
        const response = await this.api.delete('/');
        return response.data;
    }

    async get(id) {
        const response = await this.api.get(`/${id}`);
        return response.data;
    }

    async update(id, data) {
        const response = await this.api.put(`/${id}`, data);
        return response.data;
    }

    async delete(id) {
        const response = await this.api.delete(`/${id}`);
        return response.data;
    }
}

export default new ContactService();
