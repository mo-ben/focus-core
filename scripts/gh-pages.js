var shell = require("shelljs");


shell.exec("npm run book:clean");
shell.exec("npm run book:build");
shell.cd("./_book");
shell.exec("git init");
shell.exec("git commit -m 'update book'");
shell.exec("git checkout -b gh-pages");
shell.exec("git add .");
shell.exec("git commit -m 'update book'");
shell.exec("git push https://github.com/KleeGroup/focus.git gh-pages --force");
