var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('projects/ng-xotb/README.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync(
  'projects/xotb-demo/src/assets/docs/README.html',
  markdownReadMe
);
