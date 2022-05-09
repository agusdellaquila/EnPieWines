# Documentación EnPie
Este es un proyecto e-commerce para un gran distribuidor de alcohol de la ciudad de Buenos Aires, que busca ser una marca minimalista pero funcional.
## Como instalar
### #1 Instalaciones
Primero debemos tener instalado [Node](https://nodejs.org/es/) y [Git](https://git-scm.com/downloads) en nuestro equipo. 
### #2 Clonar el repositorio
Una vez instalado git,  creamos la carpeta donde queremos que se clone el proyecto, desde la terminal nos posicionamos en ella y escribimos el siguiente comando:

    git clone https://github.com/agusdellaquila/enPieWines.git

### #3 Inicializar NPM
Nuevamente en la terminal escribimos los siguientes comandos (posicionándonos en la carpeta que clonamos, donde se encuentra el package.json):
**Para la inicialización del proyecto**

    npm init -y

**Para instalar las librerías y dependencias**

    npm install

**Para una ejecución local del proyecto**

    npm start

El comando npm start nos abrirá automáticamente en nuestro navegador la url [http://localhost:3000/](http://localhost:3000/) que sera la que nos permitirá visualizar la aplicación.
## Tecnologías
Para llevar a cabo este proyecto se hizo uso de las siguientes:
### React
Se utiliza esta librería para la creación total de la Single Page Application (SPA) ya que destaca en el manejo del DOM y sus componentes visuales.
Dentro de react utilizamos : 
+ { useState } : para guardar y setear valores, como si fueran variables 
+ { useEffect } : para ejecutar código en las distintas etapas de la vida útil del componente
+ { context } : para generar un ámbito el cual es accesible dentro de toda la sección elegida de la aplicación
**React-router-dom**
+ { useParams } : para obtener información útil de la URL que nos ayuda a poder filtrar por categorías
+ { routes } : para envolver las rutas que voy a utilizar
+ { route } : para indicar el path de cada elemento contenido en Route 
+ { link } : para indicar el hipervínculo. Funciona utilizando la etiqueta `<a>` de HTML
 ### Firestore
 Esta es la base de datos no estructural proporcionada por firebase, google.
 De esta hemos usado: 
+   collection
+   getDocs
+   query
+  where
+  getFirestore
+  doc
+  getDoc

Estas funciones se utilizan para obtener y enviar y datos desde y hacia la base de datos
## Estructura de las páginas
+ **Inicio:** Cuenta con un alert para promocionar un descuento, un carrousel con banners, una sección donde se muestran productos en oferta, un slider de las bodegas participes, y el footer
+ **Cerveza, Champagne, Gin, Vino y Whisky:** Las páginas donde se listan los productos correspondientes, donde cada item tiene un detalle dentro para poder saber mas y agregarlos al carro.
+  **Carrito:** Donde se encuentra detallado el carrito con todos los productos agregados, un botón para eliminar item y otro para vaciar el carro entero. Tambien cuenta con un input para un código de descuento. Por ultimo esta el botón que nos lleva al checkout.
A continuación un gif demostrativo de como generar una compra:
![Gif compra](https://i.imgur.com/G2Zpv63.gif)
+ **Checkout:** Página donde se realiza el final del pedido, la cual cuenta con un resumen del carrito para darle un ultimo vistazo y un formulario para completar los datos del comprador
+ **Sobre Nosotros:** Una breve descripción de los miembros de EnPie.
+ **Términos y condiciones:** Descripción de los términos y condiciones disponibles para los usuarios.
+ **Política de Privacidad:** Descripción de la política de privacidad disponible para los usuarios.
+ **Contacto y ubicación:** Página donde se detalla la ubicación del local con un iframe de google maps.
 
## Estructura de carpetas
Todo el código se encuentra dentro de la carpeta src donde nos encontraremos archivos de suma importancia  como el de App.js que es el archivo de javascript principal donde se hacen las importaciones de dependencias y de estilos, y el archivo padre desde donde se despliegan todos los elementos de React.
Tambien encontraremos el archivo Atoms.css el cual hablaremos en profundidad en la sección de  **Estilos** 

Luego, dentro de src hallaremos la carpeta font, donde se encuentra instalada la tipografía principal de la marca. La carpeta services, donde esta el index.js de los servicios donde esta la conexión con la API de firestore. Y por ultimo la carpeta components donde están todos los componentes de react que conforman esta aplicación. La mayoría cuenta con su propia hoja de estilos individual a cada componente.
## Estilos
El archivo principal de estilos es el llamado Atoms.css, una librería creada por mi, basada en el atomic design. Esto consiste en tener clases muy pequeñas las cuales hagan cambios muy específicos, con nombres obvios y fáciles de recordar. De esta forma cada vez que creemos una nueva etiqueta, podremos darle muchos estilos de manera rápida y sencilla. Pero esto es simplemente, como el nombre indica, una hoja de estilos con átomos. Claramente esto no alcanza para poder estilar la pagina completa, por eso es que la mayoría de los componentes cuentan con su hoja de estilos personales. 
Los @mediaQueries pueden ser encontrados en los estilos de cada componente

# Listo! ya deberíamos tener el proyecto en funcionamiento

Hi 👋 My name is Agustin Dell' Aquila
=====================================
If you liked my work you can know more about me with the links below

FullStack Developer
-------------------
* 🌍  I'm based in Buenos Aires, Argentina
* 🖥️  See my portfolio at [Portfolio](http://agusdellaquila.github.io/acu-web-portfolio/)
* ✉️  You can contact me at [agusdellaquila72@gmail.com](mailto:agusdellaquila72@gmail.com)
* 🧠  I'm currently learning Databases
### Skills
<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="Typescript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
<a href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg" width="36" height="36" alt="Webpack" /></a>
<a href="https://babeljs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg" width="36" height="36" alt="Babel" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a>
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
<a href="https://metamask.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/metamask-colored.svg" width="36" height="36" alt="MetaMask" /></a>
<a href="https://solana.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/solana-colored.svg" width="36" height="36" alt="Solana" /></a>
<a href="https://www.terra.money/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/terra-colored.svg" width="36" height="36" alt="Terra" /></a>
</p>

### Socials
<p align="left"> <a href="https://www.github.com/agusdellaquila" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" /></a> <a href="https://www.linkedin.com/in/agustin-dell-aquila-a5b2451b2/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" /></a> <a href="https://www.twitter.com/acu__js" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" width="32" height="32" /></a></p>