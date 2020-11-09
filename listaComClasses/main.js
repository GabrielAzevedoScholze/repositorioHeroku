import { json } from 'body-parser';
import express, {request,  response}  from 'express';
import ClientService from "./clientService.js"
const app = express();
app.use (json());

var clientService = new ClientService();

// get Client
app.get('/client', (request, response) => {
    
    var result = clientService.getCustomers();
    response.json(result);
})

// post Client
app.post('/customer',(request, response) => {
    
    console.log(request.budy);

    var name = request.body.name;
    var age = request.body.age;
    var email = request.body.email;
    console.log(name + " " + age + " " + email);
    
    clientService.addCliente(name, age, email);
    response.send("Cliente adicionado");
})

var port = 4200;
console.log("Iniciando servidor...");
app.listen(process.env.PORT || port);
console.log("Executando serviço na porta: " + port);