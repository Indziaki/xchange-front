
ng build ngx-xchange-ui
dentro de la carpeta dist/ngx-xchange-ui correr
#npm pack

# Angular storybook config
 

# How to install ngx-xchange-ui library
## For develop
make the clone, 
git clone of this repository (add rl)
cd xchange-front
npm install 
npm run build:lib
-> This instruction create a dist folder to contain the library
cd ..
### Make a git clone of client repository
1. git clone client repository
1. cd xchange-client
1. Set, "preserveSymlinks": true, into angular.json at:
1. -> projects: xchange: client : architect : build : options
1. npm install ../xchange-front/dist/ngx-xchange-ui
1. npm install
1. install tailwindcss (consult the oficial documentation ..url)
1. npm install -D tailwindcss postcss autoprefixer
1. npx tailwindcss init
1. Set the initial tailwind.config.js:
  content: [
    "./src/**/*.{html,ts}",
  ]
1. add tailwind directives to style.scss 
@import 'tailwindcss/base'; 
@import 'tailwindcss/components'; 
@import 'tailwindcss/utilities';
1. Set styles in angular.json file 
1. Set a base.css file into angular.json, build, styles 
-> projects: xchange: client : architect : build : options
"node_modules/ngx-xchange-ui/src/assets/css/base.css",


## For production