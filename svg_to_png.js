const fs = require('fs');
const svg2png = require('svg2png');

if (process.argv.length < 3) {
  console.log('You did not specify a file name');
  return;
}

fs.readFile(`${process.argv[2]}.svg`)
    .then(svg2png)
    .then(buffer => fs.writeFile(`${prcoess.argv[2]}.png`, buffer))
    .catch(e => console.error(e));