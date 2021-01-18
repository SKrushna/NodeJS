require('should');

var sum = require('./sum');

describe("Sum Lib", function() {

    it("should be able to sum 0 and 5", function() {
        sum(0, 5).should.equal(5);
    });

    it("should be able to sum 2 and 5", function() {
        sum(2, 5).should.equal(6);
    });

    it("should be able to do some sums", function() {
        sum(1, 1).should.equal(2);
        sum(1, 2).should.equal(3);
        sum(2, 1).should.equal(3);
        sum(10, 120).should.equal(130);
    });
    console.log("hello");
});