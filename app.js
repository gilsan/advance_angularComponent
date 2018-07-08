var PromiseFtp = require('promise-ftp');
var fs = require('fs');
var host='221.141.251.58';
var user='han';
var password='1han7107';

var ftp = new PromiseFtp();

function ftpClient(ftp,host,user,password) {
    ftp.connect({host: host, user: user, password: password})
    .then( function(serverMessage) {
        console.log(serverMessage+'\n');
      return ftp.cwd('/var/www/html');
    }).then(function(lists) {
       return ftp.list();
    }).then( function(lists) {
       
       lists.forEach(function(list) {
           console.log(list.name);
        });
       return ;
    }).then(function() {
       return ftp.get('./alimi.c');
    }).then(function(stream) {
        return new Promise(function (resolve, reject) {
            stream.once('close', resolve);
            stream.once('error', reject);
            stream.pipe(fs.createWriteStream('alimi.c'));
          });
    }).then( function() {
      return ftp.end();
    }) ;  

    } // End of ftp function

    ftpClient(ftp,host,user,password);
