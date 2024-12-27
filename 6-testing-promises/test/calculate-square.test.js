import calculateSquare from '../src/calculate-square';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

describe('calculateSquare using return statement', function () {
    it('should resolve with number 4 is passed if passed number 2', function () {
        return expect(calculateSquare(2)).to.eventually.be.eq(4);
    });

    it('should  become fulfilled when passed number 2', function () {
        return expect(calculateSquare(2)).to.be.fulfilled;
    });

    it('should become rejected if passed a string', function () {
        return expect(calculateSquare('some string')).to.be.rejected;
    });
});

describe('calculateSquare using done callback', function() {
    it('should resolve with number 4 is passed if passed number 2', function (done) {
        expect(calculateSquare(2)).to.eventually.be.eq(4).notify(done);
    });

    it('should  become fulfilled when passed number 2', function (done) {
        expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    });

    it('should become rejected if passed a string', function (done) {
        expect(calculateSquare('some string')).to.be.rejected.notify(done);
    });
});

describe('timeouts tests', function () {
    it('should resolve with number 4 is passed if passed number 2', function () {
        //timeout should be longer that Promise timeout in calculateSquare function
        this.timeout(4000);
        return expect(calculateSquare(2)).to.eventually.be.eq(4);
    });
})