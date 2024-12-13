// es recibir la informacion del front o de donde vayamos a hacer las pruebas por ejemplo postamn 
import { CustomExceptions } from "../../tools/CustomExceptions";
import { Utils } from "../../tools/Utils";
import { UserModel } from "../models/UserModel";

class UserController{

    static async registerUser(req: any, res: any) {
      console.log('Solicitud de registro recibida', req.body);
      const { nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, calle, ciudad, estado, pais, codigo_postal } = req.body;

      if (
          Utils.hasEmptyParams([
              nombre, apellido_paterno, correo_electronico, contrasena,
              calle, ciudad, estado, pais, codigo_postal
          ])
      ) {
          throw new CustomExceptions("007");
      }

      const result = await UserModel.registerUser({
          nombre, apellido_paterno, apellido_materno, correo_electronico,
          contrasena, calle, ciudad, estado, pais, codigo_postal
      });

      res.json(result);
  }

  static async loginUser(req: any, res: any) {

    console.log("Datos recibidos en el cuerpo de la solicitud:", req.body);
      const { correo_electronico, contrasena } = req.body;

    //   if (Utils.hasEmptyParams([correo_electronico, contrasena]))
    //       throw new CustomExceptions("007");
    if (Utils.hasEmptyParams([correo_electronico, contrasena])) {
        console.log("Parámetros vacíos detectados");
        throw new CustomExceptions("007");
      }

      const result = await UserModel.loginUser(correo_electronico, contrasena);

      res.json(result);
  }
}

    


export{UserController}

// tsc -w

//  despues en otra terminal      nodemon dist/  