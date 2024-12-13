import { Router } from "express";
import { UserController } from "../app/controllers/UserController";


const router =Router();


// Ruta para registrar un usuario
router.post('/register', UserController.registerUser);

// Ruta para iniciar sesión
router.post('/login', UserController.loginUser);
export default router;

