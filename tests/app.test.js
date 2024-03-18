const {add, isEven} = require('../app')

test('5+3 should return 8', () => { 
    expect(add(5,3)).toEqual(8)
 })
test('5+8 should not return anything only 13',()=>{
    expect(add(5,8)).not.toEqual(56)
})

test('test should throw an error if arguments are not number',()=>{
    expect(()=>add(A,10)).toThrow()
})

test('isEven() should return true',() =>{
    expect(isEven(10)).toBeTruthy()
    expect(isEven(14)).toBeTruthy()
    expect(isEven(53)).not.toBeTruthy()
    expect(isEven(98)).toBeTruthy()
})

test('isEven() should return false',() =>{
    expect(isEven(13)).toBeFalsy()
    expect(isEven(38)).not.toBeFalsy()
    expect(isEven(77)).toBeFalsy()
    
})

test('isEven() should throw an error',()=>{
    expect(()=>isEven('10')).toThrow()
    expect(()=>isEven(true)).toThrow()
    expect(()=>isEven(false)).toThrow()
    expect(()=>isEven('')).toThrow()
    expect(()=>isEven([])).toThrow()
    expect(()=>isEven({})).toThrow()
    expect(()=>isEven(null)).toThrow()
    expect(()=>isEven(undefined)).toThrow()
})