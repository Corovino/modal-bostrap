# ZINOBE TEST

Desarrollo de la prueba propuesta por ZINOBE. 
Al momento de clonar el repo  dentro de la carpeta bank se encuentran  dos carpetas  una llamada v1, la cual contiene
el Api del proyecto, y una carpeta llamada zinobe, la cual contiene el front del proyecto.   


User : sastoqueh@gmail.com
Pass : 123456

## Instalación

Use npm i  antes de correr el proyecto para instalar las librerias necesarias tanto e node como en angular.


```bash
npm i | npm install
```

## Uso

Para correr el Api en node es necesario:

```bash
npm i | npm install
```
Luego de esto 

```bash
npm start
```

Para correr el Front en Angular es necesario:


```bash
npm start
```
Usualmente se usa ng serve, pero  por algunos problemas de cors  presentados  realice una configuración de proxy, para evitar conflictos con el Api


```bash
{
    "/api": {
        "target": "http://localhost:3030",
        "secure": false,
        "changeOrigin": true
    }
} 
```

API ZINOBE V1 End points

```bash

Balance me permite gestionar el monto global de la plataforma

Get api/balance
POSt API/balance


Account Me permite gestionar los créditos de los usuarios.

Get api/account/:user_id
Get api/account/:user_id
POST API/account

Custumer Me permite gestionar los usuarios en el sistema.

Get api/custumer
POST API/account

Login Me permite autenticar usuarios del sistema.

POST api/login

** Se resalta que para este caso por agilidad Los métodos POST hacen las funciones de PUT**

** Es nesecario estar autenticado para consumir los servicios **



Para la base de datos use  mongoDB desplegada en mongo Atlas, la DB no corre de manera local.  

 ZINOBE Front 

Autenticación  de usuario

 http://localhost:4200/login

 Home dashboard 

 http://localhost:4200/dashboard

Create User 

 http://localhost:4200/dashboard/create-user



