var fs = require('fs');
module.exports = function(filename, successFn, errorFn) {
  fs.readFile(filename, function(err, data) {
      if(err) {
           errorFn(err);
           console.error('ERROR::',err)
      } else {
           successFn(data);
      }
 });
};