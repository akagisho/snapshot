var express = require('express');
var bodyParser = require('body-parser');
var ws = require('webshot');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res, next) {

  var options = {
    screenSize: {
        width:  1024
      , height: 768
    }
    , userAgent: 'Mozilla/5.0 (compatible; MSIE 11.0; Windows NT 6.2; Trident/6.0)'
    , renderDelay: 2000
    , timeout: 30000
    , phantomConfig: {
        'ignore-ssl-errors': 'true'
        , "ssl-protocol": "any"
    }
    , phantomPath: '/usr/local/bin/phantomjs'
  };

  if (req.body.type !== 'thumb') {
    options['shotSize'] = { width: 'all', height: 'all'};
  }

  var rs = ws(req.body.target,options);

  rs.on('data', function(data){
    res.write(data.toString('base64'));
  });
  rs.on('error', function(e){
    console.log(e);
  });
  rs.on('end', function(){
    res.end();
  });
});

module.exports = app;