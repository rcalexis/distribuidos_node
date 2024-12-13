"use strict";
//aqui van todas mis variables globales 
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT_MYSQL = exports.DATABASE_MYSQL = exports.PASSWORD_MYSQL = exports.USER_MYSQL = exports.HOST_MYSQL = exports.SERVER_PORT = void 0;
//definir el puerto del servidor
exports.SERVER_PORT = Number(process.env.PORT) || 3000;
//definir el nombre del host 
exports.HOST_MYSQL = "127.0.0.1";
//definir el nombre del usuario 
exports.USER_MYSQL = "root";
//definir la contraseña 
exports.PASSWORD_MYSQL = "12345";
//definir la base de datos 
exports.DATABASE_MYSQL = "node";
exports.PORT_MYSQL = 3307;
//npm install
//npm install --save-dev typescript
//npx tsc --init 
//npm i --save-dev @types/node
//npm i --save @types/express
