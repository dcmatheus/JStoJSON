import fs from "fs";

const fileName: string = process.argv[2];

let teste = require(`./convert/${fileName}`);

if (teste.default) {
  teste = teste.default;
}

fs.writeFile(`./converted/${fileName.split(".")[0]}.json`, JSON.stringify(teste), 'utf8', (err) => err && console.log(err));

