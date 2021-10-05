const path = require('path');

module.exports = {
  entry: './themes/basic/assets/js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__direname, 'themes', 'basic', 'assets', 'js'),
  },
};
