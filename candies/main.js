// n children have got m pieces of candy.  They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all of the children together. Individual pieces of candy cannot be split.

// Example:
// For n = 3 and m = 10, the output should be candies(n,m) = 9.

// Each child will eat 3 pieces. So the answer is 9.

// Hints:
// Math.floor()

function candies(children, candy) {
  return Math.floor(candy / children) * children;

}


/**
 * Test Suite
 */
describe("candies()", () => {
  it("returns amount of total equal candy to be eaten", () => {
    // arrange
    const children = 3;
    const candy = 10;

    // act
    const result = candies(children, candy);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(9);
  });
});
