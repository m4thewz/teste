#!/usr/bin/env sh

set -e

# build
npm run build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:m4thewz/teste.git main:gh-pages
