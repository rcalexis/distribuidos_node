"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../app/controllers/UserController");
const router = (0, express_1.Router)();
// Ruta para registrar un usuario
router.post('/register', UserController_1.UserController.registerUser);
// Ruta para iniciar sesión
router.post('/login', UserController_1.UserController.loginUser);
exports.default = router;
