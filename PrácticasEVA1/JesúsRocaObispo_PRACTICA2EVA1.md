# *Práctica 2 EVA 1*
#### Crea Un fichero en *código Markdown* donde describas brevemente la instalación de 3 entornos de desarrollo, uno de los cuales deberá ser *Visual Studio Code*. Dentro de la sintaxis empleada deberás usar:

- Logo (imagen) de cada entorno.
- Enlaces a la web de descarga.
- Citas (quotes) donde pueda ver el código Linux usado para la instalación.

## Instalación del Visual Studio Code

![Texto alternativo](https://res.cloudinary.com/practicaldev/image/fetch/s--LiYXrus5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://code4coders.files.wordpress.com/2019/05/008ce-1cn_xbd307e3lobhk511qqg.png%3Fw%3D700%26zoom%3D2%2522%2520Logo%2520Title%2520Text%25201%2522)

[Enlace de descarga](https://code.visualstudio.com/download)

#### Como paquete Snap

Abrimos la terminal y escribimos:

> sudo apt update

Esto nos actualizará los paquetes que nuestro ubuntu.

Luego para instalar el Visual Studio Code escribimos:

> sudo snap install --classic code

## Instalación de Eclipse

![Texto alternativo](https://img2.freepng.es/20180814/btc/kisspng-logo-eclipse-java-integrated-development-environme-announcing-the-make-you-own-sensor-workshop-senso-5b72ffa2bdfd16.6412522515342632027782.jpg)

[Enlace de descarga](https://www.eclipse.org/downloads/)

#### Prerrequisitos para la instalación

Necesitamos instalar java en nuestra máquina ubuntu:

> sudo apt update
> sudo apt install openjdk-14-jre

Para ver si se instaló correctamente escribimos:

> java --version

#### Instalación de Eclipse por snap.

Escribimos en nuestro terminal:

> sudo snap install --classic eclipse

## Instalación de Netbeans

![Texto alternativo](https://miracomosehace.com/wp-content/uploads/mch/logo-apache-netbeans_14033.jpg)

[Enlace de descarga](https://netbeans.apache.org/download/index.html)

Vamos a instalar Netbeans a través de la utilidad *wget*, vamos a abrir nuestro terminal y secribimos:

> wget -c http://download.netbeans.org/netbeans/8.2/final/bundles/netbeans-8.2-linux.sh

Ahora utilizando el siguiente comando, haremos que el script sea ejecutable. Justo después comenzaremos con la instalación:

> chmod +x netbeans-8.2-linux.sh
> ./netbeans-8.2-linux.sh

Luego nos aparecerá una ventana de *bienvenida* del instalador. Haremos click en *Next* para continuar y seguir customizando la instalación, aceptaremos los términos y condiciones y ya se instalaria nuestro NetBeans.