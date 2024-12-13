import mysql, {Connection} from 'mysql2/promise';  //npm i --save-dev mysql2 este comando para que no nos mande error estaimportacion
//Estas son las que tenemos en el enviroment que son las variables
import { HOST_MYSQL, PORT_MYSQL } from '../../global/Enviroment';
import { PASSWORD_MYSQL } from '../../global/Enviroment';
import { USER_MYSQL } from '../../global/Enviroment';
import { DATABASE_MYSQL } from '../../global/Enviroment';



const dbConfig = {
    host: HOST_MYSQL,
    user: USER_MYSQL,
    password: PASSWORD_MYSQL,
    database: DATABASE_MYSQL,
    port: PORT_MYSQL,

};

const Connect = async(): Promise<Connection> =>{
  
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Conexión exitosa a la base de datos');
        return connection;
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw new Error('Database connection failed');
      }
}

export { Connect }