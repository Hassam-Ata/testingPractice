


const {capitalize,reverseString,calculator,caesarCipher}=require('./functions')


describe('capitalize',()=>{
    test('capitalizes the string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
      })
    test('capitalize one letter',()=>{
        expect(capitalize('a')).toBe('A');
    })
    test('empty string',()=>{
        expect(capitalize('')).toBe('');
    })
})
describe('reverseString',()=>{
    test('reverse the string',()=>{
        expect(reverseString('hello world')).toBe('dlrow olleh')
    })
    test('reverse one letter',()=>{
        expect(capitalize('a')).toBe('A');
    })
})

describe('calculator',()=>{
    test('check addition',()=>{
        expect(calculator.add(1,2)).toBe(3);
    })
    test('check multiplication',()=>{
        expect(calculator.multiply(2,3)).toBe(6);

    })
    test('check subtraction',()=>{
        expect(calculator.subtract(1,2)).toBe(-1);
        expect(calculator.subtract(2,-1)).toBe(3);
        expect(calculator.subtract(2,1)).toBe(1);
    })
    test('check division',()=>{
        expect(calculator.divide(1,2)).toBe(0.5);
        expect(calculator.divide(1,0)).toBe('Denominator cannot be 0');
        expect(calculator.divide(10,2)).toBe(5.0);
    })
  
})  


describe('caesarCipher',()=>{
    test('for string',()=>{
        expect(caesarCipher('hassam',3)).toBe('kdvvdp');
    })
    test('for empty string',()=>{
        expect(caesarCipher()).toBe("Enter string for encryption");

    })
    test('for single character',()=>{
        expect(caesarCipher('a',3)).toBe("d");

    })
   
  
})
   