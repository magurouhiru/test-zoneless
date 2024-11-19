import { $ } from 'execa';
import * as fs from 'node:fs';

const input = './index.html';
const output = './dist/index.html';
const target = 'replace.me';

Promise.all([
  $('npm ls'),
  fs.promises.readFile(input, { encoding: 'utf8' }),
]).then(([e, f]) => {
  const text = f.replace(target, e.stdout.trim());
  fs.writeFile(output, text, console.log);
});
