import * as fs from 'node:fs';
import * as constants from 'node:constants';

const browser = 'browser/';

const copyFile = (project: string) => {
  fs.promises.readdir(project + browser).then((value) => {
    value.forEach((v) =>
      fs.copyFile(
        project + browser + v,
        project + v,
        constants.COPYFILE_EXCL,
        console.log,
      ),
    );
  });
};

const withZone = './dist/with-zone/';
const zoneless = './dist/zoneless/';
copyFile(withZone);
copyFile(zoneless);
