'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var lib = require('../lib');

// Load ENV
var ServerlessHelpers = require('serverless-helpers-js');
ServerlessHelpers.loadEnv();

// Lambda Handler
module.exports.handler = function(event, context) {
  lib.extract(function(){
    return context.getRemainingTimeInMillis() < 3;
  });
};
