//aqui van todas mis variables globales 

//definir el puerto del servidor
export const SERVER_PORT: number= Number(process.env.PORT )|| 3000;

//definir el nombre del host 
export const HOST_MYSQL: string =  "127.0.0.1";

//definir el nombre del usuario 
export const USER_MYSQL: string = "root";

//definir la contraseña 
export const PASSWORD_MYSQL: string = "12345";

//definir la base de datos 
export const DATABASE_MYSQL: string = "node";

export const PORT_MYSQL: number = 3307; 






//npm install
//npm install --save-dev typescript
//npx tsc --init 
//npm i --save-dev @types/node
//npm i --save @types/express