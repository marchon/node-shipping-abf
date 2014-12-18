'use strict';

var abfAPI = require('../lib/index');

var abf = new abfAPI({
  mode: 'test', // or live
  id: 'MY_ID_CODE',
});

abf.rate_quote().then(function(res) {
  console.log(res);
}).catch(function(err) {
  console.log(err);
});