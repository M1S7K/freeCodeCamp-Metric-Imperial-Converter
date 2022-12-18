// split user's input
const splitUserInput = (input) => {
  let digits = input.match(/[.\d\/]+/g) || ["1"];
  let providedUnit = input.match(/[a-zA-Z]+/g)[0];
  return [digits[0], providedUnit];
}
// check division
const checkDivision = (fraction) => {
  let numbers = fraction.split('/');
  if (numbers.length > 2) {
    return false;
  }
  return numbers;
}
function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = splitUserInput(input)[0];
    let numbers = checkDivision(result);
    if (!numbers) {return undefined;}
    let firstNumber = numbers[0];
    let secondNumber = numbers[1] || "1";
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {return undefined;}
    return result;
  };
  
  this.getUnit = function(input) {
    let result = splitUserInput(input)[1].toLowerCase();
    switch(result) {
      case 'km':
        return 'km';
      case 'gal':
        return 'gal';
      case 'lbs':
        return 'lbs';
      case 'mi':
        return 'mi';
      case 'l':
        return 'L';
      case 'kg':
        return 'kg';
      default:
        return undefined;      
    }    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = splitUserInput(initUnit)[1].toLowerCase();
    switch(result) {
      case 'km':
        return 'mi';
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'mi':
        return 'km';
      case 'l':
        return 'gal';
      case 'kg':
        return 'lbs';
      default:
        return undefined;      
    }    
  };

  this.spellOutUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    switch(unit) {
      case 'km':
        return 'kilometers';
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'mi':
        return 'miles';
      case 'l':
        return 'liters';
      case 'kg':
        return 'kilograms';
      default:
        return "Sorry can't find";      
    }    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;
    switch(unit) {
      case 'km':
        result = initNum / miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    };
    return parseFloat(result.toFixed(5))
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
