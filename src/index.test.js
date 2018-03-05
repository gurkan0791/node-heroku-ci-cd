var multiply = require("./index");
const first = 2,
    result = 4,
    second = 2;

test("multiply 2 * 2 to equal 4",() => {
    expect(multiply(first,second)).toBe(result);
});