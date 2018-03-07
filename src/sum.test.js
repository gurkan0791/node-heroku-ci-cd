var sum = require("./sum");
const first = 2,
    result = 5,
    second = 3;

test("sum 2 + 3 to equal 5",() => {
    expect(sum(first,second)).toBe(result);
});