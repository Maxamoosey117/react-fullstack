import {tableData} from "./table_data";

export class LocalStorageService {
    "use strict"

    constructor(key) {
        this.key = key;

        //if data is NOT in local storage, init and sort using sortCol and sortDir from the model
        if (!this.retrieve()) {
            this.factionsData = this.cloneObject(tableData); //get copy of data
            this.sort(this.sortCol, this.sortDir, true); //sortInfo default sort
        }
    }

    //Getters and setters
    get sortCol() {
        return this.factionsData.sortInfo.sortCol;
    }

    set sortCol(col) {
        this.factionsData.sortInfo.sortCol = col;
    }

    get sortDir() {
        return this.factionsData.sortInfo.sortDir;
    }

    set sortDir(dir) {
        this.factionsData.sortInfo.sortDir = dir;
    }

    get size() {
        return this.factionsData.data.length;
    }

    get list() {
        return this.factionsData.data;
    }

    async getListAsync() {
        return Promise.resolve(this.factionsData.data);
    }

    //CRUD FUNCTIONS
    async create(obj) {

        // next id is the max id + 1
        let nextId = 1;
        for (let i = 0; i < this.factionsData.data.length; i++) {
            if (this.factionsData.data[i].id > nextId) {
                nextId = this.factionsData.data[i].id;
            }
        }
        nextId++;
        obj.id = nextId;
        this.factionsData.data.push(obj);
        this.store();
        return Promise.resolve(nextId);
    }

    async read(getId) {
        const item = this.factionsData.data.find((obj) => obj.id === getId);
        return Promise.resolve(item || null);
    }

    async update(obj) {
        obj.id = parseInt(obj.id.toString());
        let index = this.getItemIndexById(obj.id);
        if (index !== -1) {
            this.factionsData.data[index] = obj;
            this.store();
            return Promise.resolve(true);
        } else {
            return Promise.reject("Item not found");
        }
    }

    async delete(removeId) {
        const index = this.getItemIndexById(removeId);
        if (index !== -1) {
            this.factionsData.data.splice(index, 1);
            this.store();
            return Promise.resolve(true);
        } else {
            return Promise.reject("Item not found");
        }

    }

    //LocalStorage Functions

    clear() {
        localStorage.removeItem(this.key);
    }

    store() {
        localStorage.setItem(this.key, JSON.stringify(this.factionsData));
    }

    retrieve() {
        const data = localStorage.getItem(this.key);
        if (data) {
            this.factionsData = JSON.parse(data);
            return true;
        }
        return false;
    }

    //Sorting and Filtering Functions
    async sort(col, direction, perm = false) {
        // sort data by col and direction
        let sortedData = this.cloneArray(this.list);
        if (direction === "up") {
            sortedData.sort((a, b) => {
                if (a[col].toString().toUpperCase() < b[col].toString().toUpperCase()) {
                    return -1;
                }
                if (a[col].toString().toUpperCase() > b[col].toString().toUpperCase()) {
                    return 1;
                }
                return 0;
            });
        } else {
            sortedData.sort((a, b) => {
                if (a[col].toString().toUpperCase() > b[col].toString().toUpperCase()) {
                    return -1;
                }
                if (a[col].toString().toUpperCase() < b[col].toString().toUpperCase()) {
                    return 1;
                }
                return 0;
            });
        }
        if (perm) {
            this.factionsData.data = sortedData;
            this.sortCol = col;
            this.sortDir = direction;
            this.store();
        }

        return Promise.resolve(sortedData);
    }

    async filter(searchTerm) {
        return Promise.resolve(
            this.cloneArray(this.factionsData.data).filter((obj) =>
                Object.values(obj).some(
                    (value) =>
                        typeof value === 'string' &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                )));
    }


    // Utility functions
    getItemIndexById(id) {
        id = parseInt(id);
        for (let i = 0; i < this.factionsData.data.length; i++) {
            if (this.factionsData.data[i].id === id) {
                return i;
            }
        }
    }

    cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    cloneArray(arr) {
        return JSON.parse(JSON.stringify(arr));
    }
}
