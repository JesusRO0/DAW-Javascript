## **PRACTICA1 EVA1**
### **Crea un fichero en código Markdown donde describas brevemente la instalación de 3 navegadores.**

### Instalación Firefox. ###

![Firefox](https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg)

- Añadimos el repositorio de Firefox:

> sudo add-apt-repository ppa:ubuntu-mozilla-security/ppa -y

- Ahora vamos a actualizar los paquetes:

> sudo apt update

- Finalmente lo instalamos:

> sudo apt install firefox

### Instalación Chromium ###

![Chromium](https://protege.la/wp-content/uploads/2018/04/h_00038_chromium_navegacion.png)

- Simplemente actualizacmos los paquetes:

> sudo apt update

- Instalarmos el navegador:

> sudo apt install -y chromium-browser

### Instalación de Opera ###

![Opera](https://img.ashampoo.com/images/products/partner0115/boxshot.png)

- Abrimos una terminal y añadimos el repositorio de Opera ejecutando el siguiente comando en la terminal:

> sudo add-apt-repository 'deb https://deb.opera.com/opera-stable/ stable non-free'

- Seguidamente añadimos la clave del repositorio ejecutando el siguiente comando en la terminal:

> wget -qO- https://deb.opera.com/archive.key | sudo apt-key add -

- A continuación actualizamos los repositorios de nuestra distro ejecutando el siguiente comando en la terminal:

> sudo apt-get update

- Finalmente ejecutamos el siguiente comando para instalar Opera:

> sudo apt-get install opera-stable


- #### **Tabla Comparativa** ####

|          Nombre         |                               Descripción                             |                    Ventajas                     |               Desventajas              |
| ----------------------- | --------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------- |
| FireFox | Mozilla Firefox es un navegador web libre y de código abierto desarrollado para distintas plataforma | Apto para equipos de sobremesa, portátiles y dispositivos móviles. Disponible para Windows, macOS, Linux, Android y iOS. Buena seguridad y excelente protección de datos.| Dispone de menos extensiones. Problemas y fallos con los últimos estándares de Internet |
| Chromium | Chromium es una base de código abierto para desarrollar un navegador web, mantenida por diversas compañías | Ayudas para el desarrollo. Una mejor consola para desarrolladores | Ocupa memoria. No es fácil de usar. |
| Opera | Opera es un navegador web creado por la empresa noruega Opera Software. | Opera se basa en Chromium. Acceso rápido y marcadores | No está preinstalado, debe descargarse e instalarse |