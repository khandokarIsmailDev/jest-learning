const { myFunction } = require('../myModule');

// test('foreach mock function',()=>{
//     const mockCB = 
// })

describe('myFunction', () => {
  it('should return "big" when the sum is greater than or equal to 10', () => {
    const result = myFunction(5, 6);
    expect(result).toBe('big');
  });

  it('should return "small" when the sum is less than 10', () => {
    const result = myFunction(2, 3);
    expect(result).toBe('small');
  });
});
