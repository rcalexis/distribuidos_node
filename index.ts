import { Router } from 'express';
import ServerConfig from "./config/server/ServerConfig";
import bodyParser from "body-parser"
// import cors from "cors";
import router from "./Routes/UserRoute";
import UserRoute from "./Routes/UserRoute"
import express from 'express';

const server = ServerConfig.instance;
const cors = require('cors');
const app = express();

//bodyParser 
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());


//cors
server.app.options('*');

// cors
server.app.use(cors());

//rutas de los servicios 
server.app.use("/users",UserRoute);

//echar andar nuestro servicio 
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);   
});

//comando para crear el archivo dist tsc -w

