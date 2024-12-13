-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: node-mysql
-- Tiempo de generación: 13-12-2024 a las 17:13:49
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido_paterno` varchar(100) NOT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `calle` varchar(255) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `codigo_postal` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `correo_electronico`, `contrasena`, `calle`, `ciudad`, `estado`, `pais`, `codigo_postal`) VALUES
(1, 'ALEXIS', 'RODRIGUEZ', 'CHAVEZ', 'RCALEXIS@GMAIL.COM', '123456789', 'PRINCIPAL', 'BDSHGAAI', 'AJKSDBU', 'AHDVYSA', 'KHSVFS1624'),
(2, 'Juan', 'Perez', 'Gomez', 'juanperez@email.com', '$2b$08$2NdIAJxClhJ8zoEb8cX/tOkzrEfq6q/rtaUbHXodpA576vMSzqLHW', 'Calle', 'Ciudad', 'Estado', 'México', '12345'),
(11, 'alexis ', 'rodriguez', 'chavez', 'rcaalexis10@gmail.com', '$2b$08$h9xvEc8QXlS2k69.Ohhgtu0LuSky3ZX4XqXMPOQ97RRLxEwToQZK.', 'principla', 'sanmiguel', 'guanjuato ', 'mexico', '5737'),
(12, 'juan ', 'perez', 'bdwwbc', 'juan@gmail.com', '$2b$08$eaLLkvobFIlgEPMWb7WsBObkQi6EvA645S3MT4J.vfzgOq/3rG.PC', 'kjwdbc', 'jdsjwcjkwbs', 'jksdbcdw', 'lkdbcew', 'odwcbew'),
(13, 'nestor', 'rodriguez', 'chavez', 'nestor@gmail.com', '$2b$08$BvTG38vSncRVNhZTCBsTPuIQEhq53ZgfvEtPIZtuWw6pePOKyj986', 'principla', 'sanmiguel', 'guanjuato', 'México', '5737'),
(14, 'carlos', 'cadena', 'rios', 'carlosantoniocadenarios@gmail.com', '$2b$08$UooNiZPFUgywHy3/8ItZS.q8Cs382Q9BxBwoR.mf5CnM4ZxQpoDO6', 'coronel narciso maria loreto ', 'sanmiguel', 'guanjuato', 'México', '5737');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
