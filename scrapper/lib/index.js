/**
 * Lib
 */
require('es6-promise').polyfill();
var Twit = require('twit');

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.extract = function(execute){
  var promise = new Promise();
  try {
    var stream = T.stream('statuses/filter', { track: "#anc" })
    stream.on('tweet', function (tweet) {
      console.log(tweet)
      if(!execute()){
        stream.destroy();
        promise.reslove();
      }
    });
  } catch(ex) {
    promise.reject(ex);
  }
  return promise;
};

