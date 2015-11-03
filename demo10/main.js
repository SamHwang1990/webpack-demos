var load = require('bundle-loader?lazy!./a.js');

load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});
