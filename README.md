# ProyectoTpv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Apartado para ir poniendo documentación para no olvidarse

## Introducción
La idea de la realización de una TPV para restaurante-bar viene porque estuve trabajando de camarero, y te das cuenta del tiempo que te puedes ahorrar con el simple hecho de no tener que escribir comandas, es mucho más rápido seleccionar objetos de la carta del restaurante usando telecomandas. 

Pues muchas empresas de hostelería aun no tienen ningún sistema implementado y siguen con la tradicional libreta, especialmente en mi pueblo, esto quiere decir que hay bastantes posibilidades de obtener clientes.

Mi idea es crear un sistema TPV y telecomandas que sea rápido y eficaz, con el beneficio que eso conlleva en una empresa de este sector.
Una vez elegida la idea me encuentro en que hay miles de aplicaciones de este estilo y muchas de ellas gratuitas, a su vez me doy cuenta de que la interfaz de usuario que ofrecen no es muy amigable y la gran mayoría son aplicaciones de escritorio antiguas, las que son de pago son mejores en esos aspectos pero normalmente incluyen demasiadas funcionalidades que luego los clientes no usan y están pagando por ello. Puntos en los cuales puedo diferenciarme de ellos ofreciendo una interfaz simple y amigable, con una funcionalidad más básica en unas aplicaciones que funcionan con la web, esto proporciona una gran ventaja frente al resto: que los datos no dependan de un sistema físico en la red local y en caso de rotura/falla los demás dispositivos seguirán funcionando (hay casos en los que se ha derramado líquido sobre el TPV y dejo de funcionar, parando el negocio o perdiendo datos). Por ende añadir un nuevo dispositivo es tan fácil como tener la aplicación (móviles) o un navegador (para el TPV).


## Resumen
Dado que hoy en día muchas empresas hosteleras aún siguen perdiendo un tiempo valioso a la hora de tomar nota de las comandas, propondré un sistema de comunicación que proporcione rapidez aparte de poder añadir funcionalidades extra ya que siempre es escalable. 
El sistema consiste en dos aplicaciones una móvil y otra de escritorio. La móvil la usará el camarero para ir creando telecomandas y se irán registrando en la base de datos y a su vez se podrán ver en la aplicación web (orientada a un equipo de escritorio) que su objetivo es que esté cerca de los cocineros para poder ir viendo las telecomandas.
La tarea de administración de la aplicación la tendrá el cliente web y el cliente móvil solo podrá realizar telecomandas.


Las aplicaciones serán creadas con Angular para la de web e Ionic para la móvil.
Usaré Ionic para que la aplicación pueda usarse en la mayoría de dispositivos móviles.
Para la persistencia de datos tengo pensado usar Firebase ya que es una base de datos remota, en tiempo real y gratuita (hasta 100 peticiones simultáneas), suficiente para la realización del proyecto ya que está enfocado a pequeñas empresas. 
Estudiaré el caso de usar una de código libre como RethinkDB, ya que no se que tal se integra con Angular e Ionic.
Los requisitos de las aplicaciones se resumen en tener una conexión estable a Internet para funcionar y un navegador web en el caso de la aplicación web.
El esquema es simple: hay una base de datos en tiempo real a la cual las dos aplicaciones se conectan y al haber cambios se actualiza en ambas aplicaciones. La base de datos es NoSQL y no tendrá relaciones.

## Objetivos
El principal objetivo es crear un sistema TPV y con telecomandas distribuyendo las funcionalidades en distintas aplicaciones para ofrecer un canal de comunicación más rápido entre el/la camarero/a y la cocina.
Otro objetivo es desarrollar dichas aplicaciones con Angular e Ionic para seguir aprendiendo sobre estas tecnologías.
El principal objetivo del proyecto es profundizar en la tecnología Angular, no me había interesado la programación web hasta que conocí este Framework y vi lo que se puede hacer con el.

## Hipótesis de Trabajo
A mayor precio para las TPVs, mayores son sus funcionalidades.
Todo el mundo no necesita todas las funcionalidades.


## Material
Hardware

Dispositivo móvil

Equipo de escritorio

Software

Angular

Ionic

Javascript

Conectividad

Conexión a Internet

## Comentarios
También puedes pensar en hacerlo con tecnologías web, así haces un desarrollo y te vale para cualquier plataforma y no te costaría nada adaptarlo para tablets y smartphones. Además que a la hora de añadir nuevas máquinas no hay que configurar ni instalar nada.
https://www.domestika.org/es/projects/98659-interfaz-de-usuario-para-terminal-de-punto-de-venta-tpv
tpv de pc gratis para comparar… son muy feos: https://catinfog.com/mejores-programas-tpv-gratis/

## Webgrafía
(nombre)Sgoliver. (Tema)Notificaciones en Android (IV): (uso)Snackbar. (fecha)17 de febrero de 2014.
(url)http://www.sgoliver.net/blog/notificaciones-en-android-iv-snackbar/

## Anexos
Plugins Visual Studio Code para Angular (opcionales, yo los he usado para el proyecto)
Path Intellisense: para añadir Path inteligente, añade autocompletar al llamar archivos, muy buena herramienta para no fallar en los import: 
https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
TypeScript Hero: para poder hacer import automáticamente al poner el nombre de la dependencia:
https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero
Angular Snippets: autocompleta:
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
vscode-icons: detecta tipos de proyectos y pone sus iconos:
https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons
angular2-switcher: añade enlaces para las variables que se usan en plantilla y te llevan a donde se declaran:
https://marketplace.visualstudio.com/items?itemName=infinity1207.angular2-switcher#review-details
Angular2-inline: Proporciona resaltado de sintaxis para CSS y HTML dentro de las plantillas:
https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline


IntelliSense for CSS class names in HTML: Decora el HTML con los nombres de clases CSS disponibles del proyecto: 
https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
Bracket Pair Colorizer: Esta extensión permite que los corchetes coincidentes se identifiquen con los colores: 
https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
