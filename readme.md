# Simple todo app

Para practicar la clean architecture

Proyecto creado con:

> npm create vite@latest

Esta aplicación es una lista de cosas por hacer, el front end se encarga de
mosrtrarlas mientras que la lista de datos se encuentra en el back end, que es
una api rest

## Instrucciones para correr

Descargar proyecto o clonarlo con git clone, luego en la carpeta del proyecto abrir
la cmd y ejecutar 

> npm install 

luego correr

> npm run dev

y gualá! 

## Estructura

Este proyecto es un ejemplo de clean architecture utilizando la siguiente estructura

src/ (root de la app)
application/ (casos de uso y utilities)
assets/ (imágenes y archivos multimedia)
domain/ (estado y estructuras)
infrastructure/ (llamadas a la api y repositories)
pages/ (las vistas)
presentation/ (los componentes que son globales)
App.jsx (archivo app)
main.jsx (archivo principal de React)

Algunas aclaraciones:

Esta estructura de carpetas se repite por vista y por componente porque cada
uno puede llegar a tener sus propios datos.
La diferencia entre utilities y useCases es que utilites es código que se 
usa varias veces mientras que useCase es un caso de uso de la app como 
eliminar o actualizar algo.

Los componentes no pueden tener una estructura de subfolders, eso está reservado
para la `App.jsx` y para lo que esté en `pages`.

## Configurando path con @

Instalamos los tipos de node:

> npm i -D @types/node

Luego nos vamos a vitte.config.ts y colocamos lo siguiente:

> import * as path from 'path'

> export default defineConfig({

> ...

> resolve: {

> alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],

> },

> })

Luego en el tsconfig.json colocamos lo siguiente:

> {

> "compilerOptions": {

> ...

> "types": ["node"],

> "paths": {

>      "@/*": ["./src/*"]

> }

> ...

## React Router

Instalanando react router con:

> npm install react-router-dom

Las rutas serán las siguientes:

/ será lo mismo que /home
/home : Será la página principal
/faq : Será la página del instructivo

# Tailwind Css

Se estará usando tailwindcss para los visuales, se instala con:

> npm install -D tailwindcss postcss autoprefixer

> npx tailwindcss init -p

También en el archivo que se creó llamado tailwind.config.cjs colocar lo 
siguiente:

>   /** @type {import('tailwindcss').Config} */

>   module.exports = {

>	    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

>	    theme: {

>		    extend: {},

>	    },

>	    plugins: [],

>   };

Y en el index.css

>@tailwind base;

>@tailwind components;

>@tailwind utilities;

## Atajos

Para poder alterar una misma palabra que aparece muchas veces primero seleccionar la
palabra a cambiar, luego presionar la combinación `ctrl` + `shift` + `L` y el cursor
aparecerá multiples veces al final de la palabra deseada para poder hacer el 
cambio de un solo.

## Redux Toolkit

Redux manejará el estado de toda la aplicación, un estado y datos que 
pueden ser vistos por todos los componentes.

Sus tres componentes son: store (los estados), reducers (las funciones que 
actualizan el estado) y actions (funciones que alteran el estado?)

Acá en el toolkit se usarán los slices que son los que actualizan y son una 
parte de todo el estado, ejemplos de slices son acutalizar un elemento, 
elmininar o crear un elemento.

Cada slice tiene un estado inicial y una lista de reducers, los 
reducers son las actions que pueden aceptar parámetros y dejan una payload
las payload son los nuevos valores que obtendrá el estado

Las dos funciones que se estarán utilizando son useDispatch que define una 
action a tomar para cambiar el estado y useSelector que jala datos
del estado para ser usados.

Lo instalamos de la siguiente manera:

> npm install @reduxjs/toolkit react-redux

Y luego si no se instalan los tipos automáticamente colocamos:

> npm install @types/react-redux

Nuestro configureStore en `store.ts` es un objeto, ya que dividirémos el estado
de la aplicación en múltiples archivos el configureStore nos permitirá agruparlos
en un lugar.

El provider estará en el `main.tsx` ya que querémos en encapsule a toda la app.

Los slices están dentro de la carpeta `redux` en la carpeta `slices`

Los typed hooks que sirven para que las funciones dispatch() y useSelector()
tengan un tipo y typescript pueda ayudar a dar flag si cometemos algún error

### NOTAS IMPORTANTES

Dentro del store no pueden haber cosas que no sean serializables, es decir
que no tengan una manera sencilla de convertirse a json, el store solo 
acepta y debe tener elementos básicos de javascript y diccionarios, no puede
contener instancias de clases o clases personalizadas

También dentro del store no pueden haber objetos mutables ni tampoco podemos
alterar el valor de estos objetos solo alterandolos en los reducers, lo ideal
es crear un nuevo objeto persistente, por ejemplo en un array no podemos
usar un .push para añadir algo, debemos crear un array nuevo desde 0 colocando
los viejos elementos y los nuevos. Puede que toolkit lo admita de la manera
mutable pero puede ocasionar bugs que no actualize los componentes.

- SICLO DE LA PRESENTATION
EVENT(HTML) -> LOGIC(JAVASCRIPT Y USECASES) -> STATE(REDUX Y CONTEXT)
(PRESENTER)    (             CONTAINER                              )

- PARA MANEJAR ASYNC
SERVICIOS -> REPOSITORY -> USECASE  -> HANDLESOMETHING
.then           ASYNC        ASYNC         .then

## UUID

podemos utilizar la biblioteca llamada uuid para crear id únicos, de esta manera
no tenemos que recurir en el math.random pues no es de fiar a la hora de crear 
elementos únicos. Los id que da son de tipo string

>   npm install uuid

y sus tipos:

> npm install --save @types/uuid

y se usa de la siguiente manera:

> import {v4 as uuid} from "uuid"

> ...

> id:uuid(),

## Presentational y Container components

Los componentes que arman una página o vista se dividirán en dos 
los que son Presentational (Se preocupa por como se VEN las cosas)
Container o inteligente (Se preocupa por como FUNCIONAN las cosas) usualmente el
que se llama es el container y este tiene dentro al presentational.

Normalmente si se tiene un componente que muestra un formulario al 
componente presentational solo se le llama form.jsx mientras que al 
container se le aclara colocando formContainer.jsx

## Hot Toast

Solo para poner una notificación al enviar el formulario de feedback para hacer
saber el usuario que el formulario fue enviado

> npm install react-hot-toast

