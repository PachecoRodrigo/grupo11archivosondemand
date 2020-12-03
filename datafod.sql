-- MySQL dump 10.13  Distrib 5.7.21, for Win64 (x86_64)
--
-- Host: localhost    Database: filesondemand
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Imagen',NULL,NULL),(2,'Audio',NULL,NULL),(3,'Escritura',NULL,NULL),(4,'Diseño',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (22,'Cancion Rock',250,'Cancion tocada por una banda de rock','product_img-1607005948573.png',2,1,NULL,'2020-12-03 14:32:28'),(23,'Poster Sunset',150,'Poster','product_img-1607006155103.png',1,2,NULL,'2020-12-03 14:35:55'),(24,'Libro Ballenas',450,'Libro','produlibro.png',3,2,NULL,NULL),(27,'Album The Beatles',1500,'Album de musica','product_img-1606935237302.jpg',2,1,'2020-11-29 18:25:48','2020-12-02 18:53:57'),(29,'Album Head Full of Dreams',1000,'Album Head Full of Dreams de Coldplay','product_img-1606676406302.jpg',2,1,'2020-11-29 19:00:06','2020-11-29 19:00:06'),(30,'3D Star Wars',120,'Diseño 3D','product_img-1606676474584.png',4,1,'2020-11-29 19:01:14','2020-11-29 19:01:14'),(31,'cumbancha',456,'Cumbancha del señor burns cuando se vuelve loco','product_img-1607004602261.jpg',4,6,'2020-12-03 14:09:14','2020-12-03 14:10:02'),(32,'Fondo capitan america',25,'fondo para celular del capitan america ','product_img-1607015072144.jpg',1,6,'2020-12-03 17:04:32','2020-12-03 17:04:32'),(33,'Personaje de los simpsons sticker',50,'sticker para whatsapp de chester lampwick','product_img-1607015263407.png',1,6,'2020-12-03 17:06:32','2020-12-03 17:07:43'),(34,'Dracula ',899,'Novela sobre vampiros chupasangre re vieja pero interesante. ','product_img-1607015353252.jpg',3,6,'2020-12-03 17:09:13','2020-12-03 17:09:13'),(35,'Shadow Hunters',450,'Saga juvenil de sahow hunters','product_img-1607015515265.jpg',3,7,'2020-12-03 17:10:59','2020-12-03 17:11:55'),(36,'Manny calavera',98,'Diseño de Manny','product_img-1607015578057.JPG',4,7,'2020-12-03 17:12:58','2020-12-03 17:12:58'),(37,'Marge planta',159,'Esta grasa no se quita, es importante tener la presencia de un hombre en la casa ','product_img-1607015683967.jpg',4,7,'2020-12-03 17:14:43','2020-12-03 17:14:43'),(38,'News of the world album',200,'Disco de la banda Queen','product_img-1607015789231.png',2,7,'2020-12-03 17:16:29','2020-12-03 17:16:29'),(39,'Japan Wave',30,'Famosa obra de arte japonesa sobre el oceano','product_img-1607015887138.jpg',1,7,'2020-12-03 17:18:07','2020-12-03 17:18:07'),(40,'Fondo graffiti wallpaper',15,'Fondo 1920 x 1080','product_img-1607016147161.jpg',1,7,'2020-12-03 17:22:27','2020-12-03 17:22:27'),(41,'Messi es un perro ',899,'Libro de cuentos cortos por Hernan Casciari','product_img-1607016272030.jpg',3,7,'2020-12-03 17:24:32','2020-12-03 17:24:32'),(42,'Efecto disparo laser',98,'Libreria de efectos de disparos tipo laser para juegos ','product_img-1607018207347.jpg',2,7,'2020-12-03 17:56:47','2020-12-03 17:56:47'),(43,'Blaster star lord',798,'Blaster de guardianes de la galaxia','product_img-1607018314973.JPG',4,7,'2020-12-03 17:58:34','2020-12-03 17:58:34'),(44,'Diseño Barco de madera',254,'Diseño para barco de madera navegable ','product_img-1607018401619.jpg',4,7,'2020-12-03 18:00:01','2020-12-03 18:00:01'),(45,'Album Muse Second law',200,'Disco de la banda muse','product_img-1607018478523.jpg',2,7,'2020-12-03 18:01:18','2020-12-03 18:01:18'),(46,'Cancion Jazz ',89,'Cancion de Jazz ambiental para fondo','product_img-1607018544719.jpg',2,7,'2020-12-03 18:02:24','2020-12-03 18:02:24'),(47,'Efecto moneda',89,'libreria de efecto de monedas para videojuegos ','product_img-1607018861409.jpg',2,7,'2020-12-03 18:07:41','2020-12-03 18:07:41');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ignacio','Tornati','nacho@fod.com','$2b$10$QK1fjVwQqcqmZGcnPB.ZHuBN1CXyYK6h/62JolEQfiQSha0gFfsKW',NULL,NULL),(2,'Agustin','Tornati','agustin@fod.com','$2b$10$0bscTOA841vQ.CCtzVuC8u4E.53LcuDGLF8EQgHn93.mzhLCmp23S',NULL,NULL),(3,'Mariano','Moreno','mariano@fod.com','$2b$10$Bi4Nfg5zngb9P5wdimhQLunLdT39RBsfVNRpBb9qYUsHLF1GM9IQi','2020-11-28 16:10:05','2020-11-28 16:10:05'),(4,'Mariana','Prestamo','mariana@fod.com','$2b$10$GMRjHmEkrrCbYTPafiKqCuPZB5KFzInMtfgDwbmG8Uq8rpODK3eey','2020-11-28 16:15:03','2020-11-28 16:15:03'),(5,'Sergio','Tornati','sergio@fod.com','$2b$10$R42t2rPDXR8F3ZDN.LnV1u/o7d87i2B8XoOHtc4NwssH6b.0855Xa','2020-11-30 00:33:47','2020-11-30 00:33:47'),(6,'patricio','vazquez','patovzqz@gmail.com','$2b$10$BDPTISf6g1rxrdz76eTSOuMoYIGUZk2MC1JpWX5mr1p4rddIfbTLS','2020-12-03 14:08:21','2020-12-03 14:08:21'),(7,'Duck','Vazquez','duck3dprints@gmail.com','$2b$10$DkyZ5/PkM./Et2FxFLH81.TtTEb5gtzC0SKf0LMOV6tBLthhdKMWq','2020-12-03 14:26:32','2020-12-03 14:26:32'),(8,'pedro','gomez','pedro@gmail.com','$2b$10$LQ5LvNKeiUI/3yzFf67kPeU8othWMCYRe1X3E0CkfsnZgNGbkAASi','2020-12-03 18:34:57','2020-12-03 18:34:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_products`
--

LOCK TABLES `users_products` WRITE;
/*!40000 ALTER TABLE `users_products` DISABLE KEYS */;
INSERT INTO `users_products` VALUES (1,1,3,NULL,NULL),(2,1,4,NULL,NULL);
/*!40000 ALTER TABLE `users_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 16:04:40
