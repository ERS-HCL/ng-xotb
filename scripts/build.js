const q = require('q');
const chalk = require('chalk');
const child_process = require('child_process');

const LIBRARIES = require('./libraries');

function build(lib) {
  const deferred = q.defer();
  console.log(chalk.green(`building library`), chalk.yellow(`${lib}`));
  child_process.exec(`ng build ${lib}`, function(err, stdout, stderr) {
    if (err) {
      console.log(chalk.red(`child processes failed with error code:${err}`));
      deferred.reject();
    } else {
      console.log(stdout);
      deferred.resolve();
    }
  });
  return deferred.promise;
}

function* build_generator() {
  for (let x of LIBRARIES) {
    yield build(x).then(() => {
      gen.next(x);
    });
  }
}

let gen = build_generator();
gen.next();
