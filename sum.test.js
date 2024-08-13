const sum = require("./sum");
test(` 3 + 4  = 7`, () => {
  expect([sum](3, 4).tobe());
});
