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
exports.UserService = void 0;
// import { Axios } from './../../node_modules/axios/index.d';
const DatabaseMethods_1 = require("../../config/database/DatabaseMethods"); // la ubicasion de mis metodos
const CustomExceptions_1 = require("../../tools/CustomExceptions");
const Utils_1 = require("../../tools/Utils");
// import axios from './../../node_modules/axios/index.d';
const axios_1 = __importDefault(require("axios"));
class UserService {
    // Método para registrar un usuario
    static registerUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, calle, ciudad, estado, pais, codigo_postal, } = userData;
            // Guardamos al usuario en la base de datos
            const saveResult = yield DatabaseMethods_1.DatabaseMethods.save({
                query: `INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, calle, ciudad, estado, pais, codigo_postal) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                params: [
                    nombre,
                    apellido_paterno,
                    apellido_materno,
                    correo_electronico,
                    contrasena,
                    calle,
                    ciudad,
                    estado,
                    pais,
                    codigo_postal,
                ],
            });
            // Si hubo un error al guardar al usuario, lo retornamos
            if (saveResult.error) {
                return saveResult;
            }
            // Enviar un webhook de bienvenida después de registrar al usuario
            yield this.welcomeUserWebhook({
                userName: `${nombre} ${apellido_paterno}`,
                email: correo_electronico,
            });
            return { error: false, msg: "Usuario registrado exitosamente" };
        });
    }
    // Método para iniciar sesión (verificación de credenciales)
    static loginUser(correo_electronico, contrasena) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield DatabaseMethods_1.DatabaseMethods.query_one({
                query: "SELECT * FROM usuarios WHERE correo_electronico = ?",
                params: [correo_electronico],
            });
            if (res.error) {
                return res; // Error en la consulta
            }
            const msj = res.msg;
            if (typeof msj === "string") {
                throw new CustomExceptions_1.CustomExceptions("004"); // Usuario no encontrado
            }
            if (!msj) {
                throw new CustomExceptions_1.CustomExceptions("004"); // Usuario no encontrado
            }
            // Verificamos que la contraseña proporcionada coincida con la almacenada
            if (!(yield Utils_1.Utils.verify(contrasena, msj.contrasena))) {
                throw new CustomExceptions_1.CustomExceptions("005"); // Credenciales inválidas
            }
            // Eliminamos la contraseña antes de retornar los datos del usuario
            delete msj.contrasena;
            return {
                error: false,
                msg: {
                    id: msj.id,
                    nombre: msj.nombre,
                    apellido_paterno: msj.apellido_paterno,
                },
            };
        });
    }
    // Enviar un webhook al registrarse (por ejemplo, para integrar con un servicio externo)
    static welcomeUserWebhook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "http://localhost:5222/api/pipedream/welcome"; // URL del webhook
            try {
                const response = yield axios_1.default.post(url, data);
                console.log(`Webhook enviado exitosamente: ${response.status}`); // Mostrar estado de la respuesta
            }
            catch (error) {
                console.error(`Error enviando webhook: ${error}`); // Manejo de error si la solicitud falla
            }
        });
    }
}
exports.UserService = UserService;
