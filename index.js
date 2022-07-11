const marked = require( "marked" );

const fs = require("fs");


var str=fs.readFileSync("README.md", "utf8")
fs.writeFileSync("index.html",marked.parse(str))

