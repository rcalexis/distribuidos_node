// import { Axios } from './../../node_modules/axios/index.d';
import { DatabaseMethods } from "../../config/database/DatabaseMethods"; // la ubicasion de mis metodos
import bcrypt from "bcrypt";
import { CustomExceptions } from "../../tools/CustomExceptions";
import { Utils } from "../../tools/Utils";
// import axios from './../../node_modules/axios/index.d';
import axios from 'axios';

class UserService {
    // Método para registrar un usuario
    static async registerUser(userData: any) {
      const {
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
      } = userData;
  
      // Guardamos al usuario en la base de datos
      const saveResult = await DatabaseMethods.save({
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
      await this.welcomeUserWebhook({
        userName: `${nombre} ${apellido_paterno}`,
        email: correo_electronico,
      });
  
      return { error: false, msg: "Usuario registrado exitosamente" };
    }
  


    // Método para iniciar sesión (verificación de credenciales)
    static async loginUser(correo_electronico: string, contrasena: string) {
      const res = await DatabaseMethods.query_one({
        query: "SELECT * FROM usuarios WHERE correo_electronico = ?",
        params: [correo_electronico],
      });
  
      if (res.error) {
        return res; // Error en la consulta
      }
  
      const msj = res.msg;
  
      if (typeof msj === "string") {
        throw new CustomExceptions("004"); // Usuario no encontrado
      }
  
      if (!msj) {
        throw new CustomExceptions("004"); // Usuario no encontrado
      }
  
      // Verificamos que la contraseña proporcionada coincida con la almacenada
      if (!(await Utils.verify(contrasena, msj.contrasena))) {
        throw new CustomExceptions("005"); // Credenciales inválidas
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
    }

    
  
    // Enviar un webhook al registrarse (por ejemplo, para integrar con un servicio externo)
    static async welcomeUserWebhook(data: { userName: string; email: string }) {
      const url = "http://localhost:5222/api/pipedream/welcome";  // URL del webhook
      try {
        const response = await axios.post(url, data);
        console.log(`Webhook enviado exitosamente: ${response.status}`); // Mostrar estado de la respuesta
      } catch (error) {
        console.error(`Error enviando webhook: ${error}`);  // Manejo de error si la solicitud falla
      }
    }

}

export { UserService };
