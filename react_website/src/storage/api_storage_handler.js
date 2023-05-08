import axios from 'axios';

export class apiHandler {

    constructor(serverURL) {
        this.serverURL = serverURL;
    }

    // CRUD
    async create(obj) {
        return axios.post(`http://${this.serverURL}/factions`, {
            faction_name: `${obj.faction_name}`,
            leader: `${obj.leader}`,
            members: `${obj.members}`
        })
            .then(response => {
                console.log(`Created faction ${obj.faction_name}`);
                return Promise.resolve(response.data);
            })
            .catch(error => {
                console.log('Error creating faction: ');
                console.log(error);
                return Promise.reject(error);
            });

    }

    async read(id) {
        return axios.get(`http://${this.serverURL}/factions/${id}`)
            .then(response => {
                console.log(`Read faction ${id}`);
                return Promise.resolve(response.data);
            })
            .catch(error => {
                console.log('Error reading faction: ');
                console.log(error);
                return Promise.reject(error);
            });
    }

    async update(obj) {
        return axios.put(`http://${this.serverURL}/factions/${obj.id}`, {
            faction_name: `${obj.faction_name}`,
            leader: `${obj.leader}`,
            members: `${obj.members}`
        })
            .then(response => {
                console.log(`Updated faction ${obj.id}`);
                return Promise.resolve(response.data);
            })
            .catch(error => {
                console.log('Error updating faction: ');
                console.log(error);
                return Promise.reject(error);
            });
    }

    async delete(id) {
        return axios.delete(`http://${this.serverURL}/factions/${id}`)
            .then(response => {
                console.log(`Deleted faction id: ${id}`);
                return Promise.resolve(response.data);
            })
            .catch(error => {
                console.log('Error deleting faction: ');
                console.log(error);
                return Promise.reject(error);
            });
    }

    // EXTRAS
    async list() {
        return axios.get(`http://${this.serverURL}/factions`)
            .then(response => {
                console.log("Retrieved table");
                return Promise.resolve(response.data);
            })
            .catch(error => {
                console.log('Error getting the table: ');
                console.log(error);
                return Promise.reject(error);
            })
    }
}

