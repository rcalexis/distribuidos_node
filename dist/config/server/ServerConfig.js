"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Enviroment_1 = require("./../../global/Enviroment");
const http_1 = __importDefault(require("http"));
class ServerConfig {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Enviroment_1.SERVER_PORT;
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.httpServer = new http_1.default.Server(this.app);
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    //metodo para iniciar el servicio 
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = ServerConfig;
//comando para correrlo 
// nodemon dist/ 
//tsc -w 
