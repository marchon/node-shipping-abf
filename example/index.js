'use strict';

var abfAPI = require('../lib/index');
var util = require('util');

var abf = new abfAPI({
  mode: 'test', // or live
  id: 'YOURID',
  account_number: 'YOURACCTNUMBER',
  debug: true
});

abf.rate_quote({
  ShipCity: 'Dallas',
  ShipState: 'TX',
  ShipZip: '75201',
  ShipCountry: 'US',
  ConsCity: 'Charlotte',
  ConsState: 'NC',
  ConsZip: '28262',
  ConsCountry: 'US',
  Wgt1: '400',
  Class1: '50.0',
  ShipAff: 'Y',
  ShipMonth: '1',
  ShipDay: '24',
  ShipYear: '2015'
}).then(function(res) {
  console.log(util.inspect(res, {depth: null}));
}).catch(function(err) {
  console.log(util.inspect(err, {depth: null}));
});

abf.tracking({
  RefNum: '011222333',
  RefType: 'A'
}).then(function(res) {
  console.log(util.inspect(res, {depth: null}));
}).catch(function(err) {
  console.log(util.inspect(err, {depth: null}));
})