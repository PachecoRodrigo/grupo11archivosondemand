# Files On Demand
Facilitamos el intercambio de arte digital

## Comencemos 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto, para su funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


* Puedes acceder al proyecto con el siguente link
  * https://github.com/PachecoRodrigo/grupo11archivosondemand.git
### Pre-requisitos 📋

Estos son los paquetes necesarios para el funcionamiento del proyecto
  -  "bcrypt": "^5.0.0",
  -  "cookie-parser": "^1.4.5",
  -  "debug": "~2.6.9",
  -  "ejs": "~2.6.1",
  -  "express": "~4.16.1",
  -  "express-session": "^1.17.1",
  -  "express-validator": "^6.6.1",
  -  "http-errors": "~1.6.3",
  -  "method-override": "^3.0.0",
  -  "morgan": "~1.9.1",
  -  "multer": "^1.4.2",
  -  "mysql2": "^2.2.5",
  -  "sequelize": "^6.3.5",
  -  "sequelize-cli": "^6.2.0"

### Ademas requerimos los softwares:
Un editor de codigo:
  - Visual Studio Code _Fue utilizato para este proyecto_

Un host local como (solo uno):
  - MAMP
  - XAMPP

Una base de datos en MySQL
  - MySQL WorkBench _Para ejecutar la base de datos que esta en la carpeta dataBase_
### Instalación 🔧
1. clonar el repositorio https://github.com/PachecoRodrigo/dhmovies.git
2. Accede a la consola o terminal de visual studio tambien con el atajo Ctrl + ñ
3. Acceder al proyecto y ejecutar el comando para instalar las dependencias necesarias. _Se instalaran todas las depencencias necesarias para el funcionamiento del proyecto_
```
npm install
```
4. Inicializa el host "El modulo de MySql".
5. Abrir MySQL WorkBench y acceder al Local instance mysql _El proyecto trabaja con Usuario: root y password: null_
6. En el menu de opciones seleccionar File/Run SQL Script...
7. En la ventana buscar el archivo DB Estructura
8. Repetir paso 6 y buscar el archivo DB Datos
9. Volvemos a visual y en la tarminal. Inicializamos el proyecto con el comando 
```
npm start
```
10. Desde tu navegador accede al proyecto mediante el link _Para la pagina web_
```
localhost:5000
```
_En caso de no funcionar revisar en la carpeta "src/bin/www.js" El puerto deberia de ser el mismo que en el link_
11. Desde tu navegador accede al DashBoard mediante el link _Para el DashBoard_
```
localhost:3000
```
12. A disfrutar la pagina