/*

 Built by
    __                   ____
   / /___  ______  ___  / __/___  ____
  / __/ / / / __ \/ _ \/ /_/ __ \/ __ \
 / /_/ /_/ / /_/ /  __/ __/ /_/ / /_/ /
 \__/\__, / .___/\___/_/  \____/\____/
  /____/_/
 */

var request  = require('request');
var xml2json = require('xml2json');
var qs       = require('querystring');
var extend   = require('extend');
var q        = require('q');

function ABF(args) {
  var $scope = this;

  var host = 'https://www.abfs.com/xml/';
  var defaults = {
    id: '',
    mode: 'test', // or live
    debug: false
  };

  $scope.config = function(args) {
    $scope.options = extend(defaults, args);
    return $scope;
  };

  var methods = {
    rate_quote: {path: 'aquotexml.asp', dl: 2},
    bill_of_lading: {path: 'bolxml.asp', dl: 2},
    tracking: {path: 'tracexml.asp', dl: 2},
    pickup: {path: 'pickupxml.asp', dl: 2},
    bill_of_lading_and_pickup: {path: 'bolpkupxml.asp', dl: 2},
    documents: {path: 'docretxml.asp', dl: 2},
    transit_time: {path: 'transitxml.asp', dl: 2}
  };

  $scope.buildAPIMethod = function(resource) {
    return function(params) {
      var defer = q.defer();

      if(!params || typeof params !== 'object') {
        params = {};
      }

      params.Test = (params.Test ? params.Test : $scope.options.mode) === 'test' ? 'Y' : 'N';
      params.ID = $scope.options.id;
      params.DL = params.DL || resource.dl;

      if($scope.options.debug) {
        console.log(host + resource.path, {qs: params});
      }

      request.get(host + resource.path, {qs: params}, function(err, response, body) {
        if(err) {
          return defer.reject(err);
        }

        try {
          var json = xml2json.toJson(body, {coerce: false, object: true, sanitize: false});
        } catch(e) {
          return defer.reject(new Error('Invalid JSON'));
        }

        if(json.ABF.ERRORS) {
          return defer.reject(json.ABF);
        }

        return defer.resolve(json.ABF);
      });

      return defer.promise;
    }
  };

  for(var i in methods) {
    $scope[i] = $scope.buildAPIMethod(methods[i]);
  }

  return $scope.config(args);
}

module.exports = ABF;