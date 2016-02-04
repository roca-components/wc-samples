ES6 seed
========

boilerplate infrastructure for transpiling JavaScript from ES6 (AKA ES2015) to
ES5 using Babel and webpack


Getting Started
---------------

* ensure [Node](http://nodejs.org) is installed
* plant the seed, either by
    * cloning this repository or manually copying its contents
    * setting up your repository to track this one as an alternative remote
      (which makes it easy to synchronize updates later):

            $ git remote add es6-seed git@github.com:FND/es6-seed.git

            $ git fetch es6-seed
            $ git merge es6-seed/master

* `npm install` downloads dependencies
* `npm run compile` performs a one-time compilation, generating `dist/bundle.js`
* `npm start` automatically recompiles while monitoring code changes
* `npm test` checks code for stylistic consistency
