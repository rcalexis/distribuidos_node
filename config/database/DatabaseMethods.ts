import { connect } from 'http2';
import { Query } from './../../node_modules/mysql2/typings/mysql/index.d';
// crear todos nuestros metodos que basicamente es nuestro crud 

import { Connect } from "./DatabaseConnections";
import { RowDataPacket } from "mysql2/promise";
import { error } from 'console';



class DatabaseMethods{

    // static async view (sql:{query:string;params:any[]}){
       
    //     let Connection;

    //     try {
    //         Connection = await Connect();

    //         const [rows] = await Connection.execute<RowDataPacket[]>(sql.query, sql.params);

    //         return{error:false, msj: rows};
            
    //     } catch (error) {
    //         return {error: true, msj: 'error_query'};
    //     }finally{
    //         if(Connection)  Connection.end();
                
            
    //     }

    // }

    static async save(sql: { query: string; params: any[] }) {
        let connection;

        try {
            connection = await Connect();
            const [result] = await connection.execute(sql.query, sql.params);
            return { error: false, msg: result };
        } catch (err) {
            console.error(err);
            return { error: true, msg: 'error_query' };
        } finally {
            if (connection) connection.end();
        }
    }

    static async query_one(sql: { query: string; params: any[] }) {
        let connection;

        try {
            connection = await Connect();
            const [rows] = await connection.execute<RowDataPacket[]>(sql.query, sql.params);
            return { error: false, msg: rows[0] || null };
        } catch (err) {
            console.error(err);
            return { error: true, msg: 'error_query' };
        } finally {
            if (connection) connection.end();
        }
    }

    


};



export {DatabaseMethods}