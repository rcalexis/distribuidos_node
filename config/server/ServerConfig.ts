
import express from "express";
import cors from 'cors';
import { SERVER_PORT } from './../../global/Enviroment'; 

import http from "http";


export default class ServerConfig{
    private  static _instance : ServerConfig;
    public app: express.Application;
    public port : number;
    private httpServer:http.Server;


    private constructor (){
        this.app = express();
        this.port = SERVER_PORT;
        this.app.use(express.json());
        this.app.use(cors());  
        this.httpServer = new http.Server(this.app);
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    //metodo para iniciar el servicio 
    start(callback: any){
        this.httpServer.listen(this.port, callback);
    }

}


//comando para correrlo 
// nodemon dist/ 

//tsc -w 