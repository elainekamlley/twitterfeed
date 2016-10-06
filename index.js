var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


module.exports = {
  start: function(){
  client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  	stream.on('data', function(event) {
    	console.log(event && event.text);
  	});

  	stream.on('error', function(error) {
    	throw error;
  	});
	});
  }
  //start = when we import the library, this start method is available to begin the stream
}