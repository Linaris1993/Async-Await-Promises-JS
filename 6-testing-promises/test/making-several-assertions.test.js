import calculateSquare from '../src/calculate-square';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

describe('calculateSquare with multiple return statements', function () {

    // This won't work. You can not have multiple return statements
    it('should resolve with number 4 if passed number 2', function () {
        return expect(calculateSquare(2)).to.eventually.be.above(5);
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    });
});

describe('calculateSquare with multiple notify calls', function(done) {
    // This also won't work. You can not call notify multiple times in 1 test case
    it('should resolve with number 4 if passed number 2', function (done) {
        expect(calculateSquare(2)).to.eventually.be.above(5).notify(done);
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    });
});

describe('calculateSquare with then method', function() {
    // This will work.
    it('should resolve with number 4 if passed number 2', function () {
      return calculateSquare(2).then(result => {
          expect(result).to.be.above(3);
          expect(result).to.be.eq(4);
      });
    })
});

describe('calculateSquare with catch method', function() {
    // This will work.
    it('should resolve with number 4 if passed number 2', function () {
      return calculateSquare('string as arg').catch(reason => {
          expect(reason).to.not.equal(null);
          expect(reason).to.not.equal('Argument of type number is expected')
        });
    });
});