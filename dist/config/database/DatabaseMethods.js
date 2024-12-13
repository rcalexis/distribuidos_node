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
exports.DatabaseMethods = void 0;
// crear todos nuestros metodos que basicamente es nuestro crud 
const DatabaseConnections_1 = require("./DatabaseConnections");
class DatabaseMethods {
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
    static save(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            let connection;
            try {
                connection = yield (0, DatabaseConnections_1.Connect)();
                const [result] = yield connection.execute(sql.query, sql.params);
                return { error: false, msg: result };
            }
            catch (err) {
                console.error(err);
                return { error: true, msg: 'error_query' };
            }
            finally {
                if (connection)
                    connection.end();
            }
        });
    }
    static query_one(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            let connection;
            try {
                connection = yield (0, DatabaseConnections_1.Connect)();
                const [rows] = yield connection.execute(sql.query, sql.params);
                return { error: false, msg: rows[0] || null };
            }
            catch (err) {
                console.error(err);
                return { error: true, msg: 'error_query' };
            }
            finally {
                if (connection)
                    connection.end();
            }
        });
    }
}
exports.DatabaseMethods = DatabaseMethods;
;
