# car_catalog

### Description
build an app to browse a car catalog. The app have a primary navigation bar containing two items: Home and Search.

I havent used create react app to make the application I made the repository from the scratch.
use npm init -y to make a package.json file

#### install bellow packages with this command
npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 
babel-preset-env babel-plugin-transform-react-jsx babel-plugin-transform-object-rest-spread

* webpack: Module loader/bundler for JavaScript
* babel-loader: Webpack loader for Babel. Babel transpiles ES6/ES7 to ES5
* babel-preset-es2015: ES6 preset for Babel. Babel core cannot handle transpiling task alone
* babel-preset-react: React preset for Babel. Just for Babel to understand React terms like JSX
* serve: HTTP server

#### Using webpack by touch new file webpack.config.js
thats where webpack look for it configuration and 
all in javascript

#### Use preact becouse is faster and smaller but work the same for make this one work we should 
add this command in : npm install --save preact preact-compat 


#### Set up react-router for routing
npm install —save react-router react-router-dom
react router is writen in jsx (jsx is the easy way of writing html)

### Difficalties

*  had trouble how to pass ajax data down to components in react.
1- Unsuccesful solution: install a node package (npm i json-loader --save-dev) 

2- add json and json-loader to the 
webpack.config.js file like this: 
module = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
3- Import the json file on the op of component
import Makes from './makes.json';

4- In the constructor ask for the variable like 
Makes: Makes

* displaying models based on the selected make
* details page for the selected car model

  
