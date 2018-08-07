const path = require('path');
// import Node.js path module for path-related operations
//create config object below
const config = {
  entry: path.join(__dirname, '/client/index.js'), //Absolute path to our entry file
  output: { // our output configuration
    path: path.join(__dirname, './public/'), //ouput path (directory/folder)
    filename: 'bundle.js' //output bundled file name
  },
  module: { //define our loaders here
    rules: [ //array of rules to handle different file types
      {
        test: /\.(js|jsx)$/, // check for .js and .jsx files (uses Regex)
        loader: 'babel-loader' //use these loaders for .js and .jsx files found
      }
    ]
  }
};

//export our config object
// We are using ES5 syntax in this config file because webpack expects this
module.exports = config;
