import * as fs from 'node:fs';
import * as constants from 'node:constants';

const dist = './dist/';

const copyFile = (project: string) => {
  fs.promises.readdir(project).then((value) => {
    value.forEach((v) =>
      fs.copyFile(project + v, dist + v, constants.COPYFILE_EXCL, () => {}),
    );
  });
};

const zone = './dist/test-zoneless_zone/browser/';
const zoneless = './dist/test-zoneless_zoneless/browser/';
copyFile(zone);
copyFile(zoneless);
