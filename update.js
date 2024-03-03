const fs = require("fs");

fs.readdir("../bevel-memez/eng", (err, files) => {
  if (err) {
    console.log(colour.red, "Error reading folder:", err);
    return;
  }

  if(files) writeListToJSON("api/memes.json", files, "utf8") 
  else console.log("Files is undefined", "\n", files)
});

function writeListToJSON(path, list, format) {
  fs.writeFileSync(path, JSON.stringify(list), format);
}

const colour = {
  normal: "\x1b[0m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  orange: "\x1b[38;5;214m",
  blue: "\x1b[34;1m",
  darkBlue: "\x1b[34m",
}