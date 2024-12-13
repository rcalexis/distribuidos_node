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
exports.UserModel = void 0;
const Utils_1 = require("../../tools/Utils");
const UserService_1 = require("../services/UserService");
class UserModel {
    // Método para registrar un usuario
    static registerUser({ nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, calle, ciudad, estado, pais, codigo_postal, }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Encriptar la contraseña antes de enviarla al servicio
            const hashedPassword = yield Utils_1.Utils.hash(contrasena);
            // Llamamos al servicio para registrar al usuario
            const res = yield UserService_1.UserService.registerUser({
                nombre,
                apellido_paterno,
                apellido_materno,
                correo_electronico,
                contrasena: hashedPassword,
                calle,
                ciudad,
                estado,
                pais,
                codigo_postal,
            });
            // Si hubo un error en el servicio, lo retornamos
            if (res.error)
                return res;
            // Si todo salió bien, retornamos una respuesta positiva
            return { error: false, msg: "Usuario registrado exitosamente" };
        });
    }
    // Método para iniciar sesión de un usuario
    static loginUser(correo_electronico, contrasena) {
        return __awaiter(this, void 0, void 0, function* () {
            // Llamamos al servicio para verificar el inicio de sesión
            const res = yield UserService_1.UserService.loginUser(correo_electronico, contrasena);
            // Si hubo un error en la respuesta o no se encontró el usuario, retornamos un error
            if (res.error || typeof res.msg !== "object" || !res.msg) {
                return { error: true, msg: "Usuario no encontrado" };
            }
            // Obtenemos los datos del usuario y eliminamos la contraseña antes de devolverla
            const msj = res.msg;
            // delete msj.contrasena; // Eliminar la contraseña de los datos a devolver
            // Devolvemos los datos del usuario sin la contraseña
            return {
                error: false,
                msg: {
                    id: msj.id,
                    nombre: msj.nombre,
                    apellido_paterno: msj.apellido_paterno,
                    // apellido_materno: msj.apellido_materno,
                    // correo_electronico: msj.correo_electronico
                },
            };
        });
    }
}
exports.UserModel = UserModel;
