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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// es recibir la informacion del front o de donde vayamos a hacer las pruebas por ejemplo postamn 
const CustomExceptions_1 = require("../../tools/CustomExceptions");
const Utils_1 = require("../../tools/Utils");
const UserModel_1 = require("../models/UserModel");
class UserController {
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Solicitud de registro recibida', req.body);
            const { nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, calle, ciudad, estado, pais, codigo_postal } = req.body;
            if (Utils_1.Utils.hasEmptyParams([
                nombre, apellido_paterno, correo_electronico, contrasena,
                calle, ciudad, estado, pais, codigo_postal
            ])) {
                throw new CustomExceptions_1.CustomExceptions("007");
            }
            const result = yield UserModel_1.UserModel.registerUser({
                nombre, apellido_paterno, apellido_materno, correo_electronico,
                contrasena, calle, ciudad, estado, pais, codigo_postal
            });
            res.json(result);
        });
    }
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Datos recibidos en el cuerpo de la solicitud:", req.body);
            const { correo_electronico, contrasena } = req.body;
            //   if (Utils.hasEmptyParams([correo_electronico, contrasena]))
            //       throw new CustomExceptions("007");
            if (Utils_1.Utils.hasEmptyParams([correo_electronico, contrasena])) {
                console.log("Parámetros vacíos detectados");
                throw new CustomExceptions_1.CustomExceptions("007");
            }
            const result = yield UserModel_1.UserModel.loginUser(correo_electronico, contrasena);
            res.json(result);
        });
    }
}
exports.UserController = UserController;
// tsc -w
//  despues en otra terminal      nodemon dist/  
