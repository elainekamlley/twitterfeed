var twitterfeed = require('../index.js')
var expect = require('expect');

var assert = require('assert');
describe('twitterfeed', function() {
  describe('start()', function() {
    it('start should be a function', function() {
      expect(twitterfeed.start).toBeA('function');
      //mocha checks asserts
    });
  });
});

//For next session - start here:

//Test: There should be a stop
//Test: There should be a limit of 10 at a time
//Test: The client.stream was called
//Test: The client.stream was called with a filter of our choosing
//Test: The client.stream was called with a filter that was passed through a form

//Note: research stubbing and mocking
//Note: async testing
