const fs = require("fs");
const join = require("path").join;

// require all models
const modelDir = join(__dirname,'./../app/model');
fs.readdirSync(modelDir)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(join(modelDir, file)));