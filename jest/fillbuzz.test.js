const fizzbuzz = require('./fizzbuzz');

test('the number 3 output will be fizz', () =>{
    expect(fizzbuzz(3)).toBe('Fizz');
});

test('the number 5 output will be buzz', () =>{
    expect(fizzbuzz(5)).toBe('Buzz');
});
test('the number 1 output will be 1', () =>{
    expect(fizzbuzz(1)).toBe('1');
});
test('the number 10 output will be buzz', () =>{
    expect(fizzbuzz(10)).toBe('Buzz');
});
test('the number 9 output will be fizz', () =>{
    expect(fizzbuzz(9)).toBe('Fizz');
});
test('the number 15 output will be fizzbuzz', () =>{
    expect(fizzbuzz(15)).toBe('FizzBuzz');
});