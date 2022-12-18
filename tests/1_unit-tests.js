const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
suite('Unit Tests', function(){
    // convertHandler should correctly read a whole number input.
    test('whole number input', function(done) {
        let input = '52L';
        assert.equal(convertHandler.getNum(input), 52);
        done();
    });
    // convertHandler should correctly read a decimal number input.
    test('decimal number input', function(done) {
        let input = '52.2L';
        assert.equal(convertHandler.getNum(input), 52.2);
        done();
    });
    // convertHandler should correctly read a fractional input.
    test('fractional input', function(done) {
        let input = '52/2L';
        assert.equal(convertHandler.getNum(input), 52/2);
        done();
    });
    // convertHandler should correctly read a fractional input with a decimal.
    test('fractional input with a decimal', function(done) {
        let input = '52/2.2L';
        assert.equal(convertHandler.getNum(input), 52/2.2);
        done();
    });
    // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    test('error on a double-fraction (i.e. 3/2/3)', function(done) {
        let input = '1/2/52L';
        assert.equal(convertHandler.getNum(input), undefined);
        done();
    });
    // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
    test('numerical input of 1 when no numerical input is provided', function(done) {
        let input = 'L';
        assert.equal(convertHandler.getNum(input), 1);
        done();
    });
    // convertHandler should correctly read each valid input unit.
    test('numerical input of 1 when no numerical input is provided', function(done) {
        let input = 'L';
        assert.equal(convertHandler.getNum(input), 1);
        done();
    });
    // convertHandler should correctly return an error for an invalid input unit.
    test('correctly return an error for an invalid input unit.', function(done) {
        let input = '55kilometers'
        assert.equal(convertHandler.getUnit(input), undefined)
        done();
    });
    // convertHandler should return the correct return unit for each valid input unit.
    test('correct return unit for each valid input unit', function(done) {
        let input = ["gal", "l", "mi", "km", "lbs", "Kg", "gAl", "L", "MI", "KM", "LBS", "kg"];
        let output = ["gal", "L", "mi", "km", "lbs", "kg", "gal", "L", "mi", "km", "lbs", "kg"];
        input.forEach(function (element, index) {
            assert.equal(convertHandler.getUnit(element), output[index])
        });
        done();
    });
    // convertHandler should correctly return the spelled-out string unit for each valid input unit.
    test('correctly return the spelled-out string unit for each valid input unit', function(done) {
        let input = ["km", "gal", "lbs", "mi", "L", "kg"];
        let expect = ['kilometers', 'gallons', 'pounds', 'miles', 'liters', 'kilograms'];
        input.forEach(function (element, index) {
            assert.equal(convertHandler.spellOutUnit(element), expect[index])
        });
        done();
    });
    // convertHandler should correctly convert gal to L.
    test('correctly convert gal to L', function(done) {
        let input = [5, 'gal'];
        let expect = 18.9271;
        // with 0.1 tolerance
        assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1);
        done();
    });
    // convertHandler should correctly convert L to gal.
    test('correctly convert L to gal', function(done) {
        let input = [5, 'L'];
        let expect = 1.32086;
        // with 0.1 tolerance
        assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1);
        done();
    });
    // convertHandler should correctly convert mi to km.
    test('correctly convert mi to km', function(done) {
        let input = [5, 'mi'];
        let expect = 8.04670;
        // with 0.1 tolerance
        assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1);
        done();
    });
    // convertHandler should correctly convert km to mi.
    test('correctly convert km to mi', function(done) {
        let input = [5, 'km'];
        let expect = 3.10686;
        // with 0.1 tolerance
        assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1);
        done();
    });
    // convertHandler should correctly convert lbs to kg.
    test('correctly convert lbs to kg', function(done) {
        let input = [5, 'lbs'];
        let expect = 2.26796;
        // with 0.1 tolerance
        assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1);
        done();
    });
    // convertHandler should correctly convert kg to lbs.
    test('correctly convert lbs to kg', function(done) {
        let input = [5, 'kg'];
        let expect = 11.02312;
        // with 0.1 tolerance
        assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1);
        done();
    });
});  