const chai = require('chai');
const should = chai.should();
const index = require('../index');
const results = require('./results');

describe('FizzBuzz functions', () => {
  describe('generateList()', () => {
    it('should return the an arr of 100 elements changing the value if the number is multiple of 5 and 3, 3 or 5', () => {
      let res = index.generateList();
      res.should.be.deep.equal(results.multiarr);
    });
  });
});

describe('checker function', () => {
  describe('checker()', () => {
    it('should return "Fizz" if number is a 3 multiple', () => {
      let res = index.checker(12);
      res.should.be.equal('Fizz');
    });
  });
});

describe('checker function', () => {
  describe('checker()', () => {
    it('should return "Buzz" if number is a 5 multiple', () => {
      let res = index.checker(20);
      res.should.be.equal('Buzz');
    });
  });
});

describe('checker function', () => {
  describe('checker()', () => {
    it('should return "FizzBuzz" if number is a 3 and 5 multiple', () => {
      let res = index.checker(30);
      res.should.be.equal('FizzBuzz');
    });
  });
});

describe('checker function', () => {
  describe('checker()', () => {
    it('should return number if number is a not a 3, 5 or 3 and 5 multiple', () => {
      let res = index.checker(76);
      res.should.be.equal(76);
    });
  });
});
