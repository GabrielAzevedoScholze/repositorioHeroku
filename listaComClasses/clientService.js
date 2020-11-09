import { request } from "express";

export default class ClientService {
    
    
    constructor(){
        this.clientList = [];

    }
    
    //obter cliente
    getClient() {
        return this.clientList;
    
    }

    
    addClient(name, age, email) {

        // criação de cliente com os dados
        var client = new Client (name, age, email); // name = nome, age = idade

        // adiciona cliente na lista         
        this.clientList.push(client);
    }
   
}   

class Client {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}