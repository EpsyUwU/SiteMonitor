import express from 'express';
import user from './routers/user.routes.js';
import TyH from './routers/TyH.routes.js';
import { createConnection } from 'mysql';
import {conexion}  from "./database/MySQL.database.js";
import cors from 'cors';


const app = express()
app.use(cors());
const port = 3000

app.use(express.json({limit: '50mb'}));
app.use('/api/checkroom/user', user);
app.use('/api/checkroom/TyH', TyH);

const connection = createConnection(conexion);
connection.connect(function(error) {
    if (error) {
        console.error("Error en la conexcion a la base de datos: ",error);
        return;
    }
    console.log("Conexcion exitosa con la base de datos");
});
connection.end();

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port)
}) 