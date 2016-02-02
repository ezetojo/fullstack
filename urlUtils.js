'use strict';

// let URL = localhost/david?name=david?age=30

function getJSONObjectFromURLParams(URL){

  let paramsSections = URL.split('?')[1];

  let params = paramsSections.split('&');

  let result = {};

  result[params[0].split('=')[0]] = params[0].split('=')[1];
  result[params[1].split('=')[0]] = params[1].split('=')[1];

  return result;

};

exports.getJSONObjectFromURLParams = getJSONObjectFromURLParams;
