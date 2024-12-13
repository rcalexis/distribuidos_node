"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServerConfig_1 = __importDefault(require("./config/server/ServerConfig"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRoute_1 = __importDefault(require("./Routes/UserRoute"));
const express_1 = __importDefault(require("express"));
const server = ServerConfig_1.default.instance;
const cors = require('cors');
const app = (0, express_1.default)();
//bodyParser 
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//cors
server.app.options('*');
// cors
server.app.use(cors());
//rutas de los servicios 
server.app.use("/users", UserRoute_1.default);
//echar andar nuestro servicio 
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
//comando para crear el archivo dist tsc -w
