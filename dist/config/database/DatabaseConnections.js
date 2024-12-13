"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const promise_1 = __importDefault(require("mysql2/promise")); //npm i --save-dev mysql2 este comando para que no nos mande error estaimportacion
//Estas son las que tenemos en el enviroment que son las variables
const Enviroment_1 = require("../../global/Enviroment");
const Enviroment_2 = require("../../global/Enviroment");
const Enviroment_3 = require("../../global/Enviroment");
const Enviroment_4 = require("../../global/Enviroment");
const dbConfig = {
    host: Enviroment_1.HOST_MYSQL,
    user: Enviroment_3.USER_MYSQL,
    password: Enviroment_2.PASSWORD_MYSQL,
    database: Enviroment_4.DATABASE_MYSQL,
    port: Enviroment_1.PORT_MYSQL,
};
const Connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(dbConfig);
        console.log('Conexión exitosa a la base de datos');
        return connection;
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw new Error('Database connection failed');
    }
});
exports.Connect = Connect;
