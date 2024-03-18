const {forEach} = require('./foreach')



//akhae calls mane forEach e use kora array k mean kore
test("forEach mock function ",()=>{
    const mockCB = jest.fn(value => value + 43)

    forEach([10,11,12],mockCB)

    //the mock function will call thrice-mane 3 bar call hobe-coz length 3 (10,11,12)
    expect(mockCB.mock.calls).toHaveLength(3)

    //the first argument of the first call to the function was 10 - mane
    expect(mockCB.mock.calls[0][0]).toBe(10)

    //the first argument of the second call to the function was 11
    expect(mockCB.mock.calls[1][0]).toBe(11)
    expect(mockCB).toHaveBeenCalledWith(11)

    //the first argument of the third cal to the fucntion was 12
    expect(mockCB.mock.calls[2][0]).toBe(12)

    //the return value of the first call to the function 53
    expect(mockCB.mock.results[0].value).toBe(53)

    //the return value of the second call to the function 54
    expect(mockCB.mock.results[1].value).toBe(54)

    //the return value of the third call to the function 55
    expect(mockCB.mock.results[2].value).toBe(55)

})

