import { Utils } from "../../tools/Utils";
import { UserService } from "../services/UserService";



class UserModel{
    // Método para registrar un usuario
    static async registerUser({
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
    }: {
        nombre: string;
        apellido_paterno: string;
        apellido_materno?: string;
        correo_electronico: string;
        contrasena: string;
        calle: string;
        ciudad: string;
        estado: string;
        pais: string;
        codigo_postal: string;
    }) {
        // Encriptar la contraseña antes de enviarla al servicio
        const hashedPassword = await Utils.hash(contrasena);
    
        // Llamamos al servicio para registrar al usuario
        const res = await UserService.registerUser({
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
        if (res.error) return res;
    
        // Si todo salió bien, retornamos una respuesta positiva
        return { error: false, msg: "Usuario registrado exitosamente" };
    }


    
    // Método para iniciar sesión de un usuario
    static async loginUser(correo_electronico: string, contrasena: string) {
        // Llamamos al servicio para verificar el inicio de sesión
        const res = await UserService.loginUser(correo_electronico, contrasena);
    
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
    }
}

export{UserModel}