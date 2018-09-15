'use strict';

/*
  This function showcases use of event parameter in Lambda handlers
  You can test it locally by passing a JSON file as payload to the function
  sls invoke local -f <function name> -p <json payload file>
*/

module.exports.main = (event, context, callback) => {

  callback(null, event);

};
