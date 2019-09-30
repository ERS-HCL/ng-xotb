const q = require('q');
const chalk = require('chalk');
const { get, keys } = require('lodash');
const ncp = require('ncp').ncp;

const fs = require('fs');

ncp.limit = 16;

const LIBRARIES = require('./libraries');

const TSCONFIG = require('../tsconfig.json');

const paths = keys(get(TSCONFIG, 'compilerOptions.paths'));

const getPath = lib => {
  const [path] = paths.filter(p => p.indexOf(`/${lib}`) >= 0);

  return path.substring(0, path.lastIndexOf('/'));
};

function copy_libraries(lib) {
  const deferred = q.defer();
  console.log(chalk.green(`copying library ${lib}`));
  const path = getPath(lib);

  // check whether path exist, if not create then
  checkDirectorySync(`./dist/${path}`);

  ncp(`dist/${lib}`, `./dist/${path}/${lib}`, function(err) {
    if (err) {
      deferred.reject();
      return console.error(err);
    }
    console.log(chalk.yellow(`${lib} done!`));
    deferred.resolve();
  });

  return deferred.promise;
}

function* copy_lib_generator() {
  for (let x of [...LIBRARIES, 'xotb-theme']) {
    yield copy_libraries(x);
  }
}

const copy_gen = copy_lib_generator();
let counter = 0;
let res = copy_gen.next(LIBRARIES[counter++]);
while (!res.done) {
  res = copy_gen.next(LIBRARIES[counter++]);
}

function checkDirectorySync(directory) {
  try {
    fs.statSync(directory);
  } catch (e) {
    fs.mkdirSync(directory);
  }
}
