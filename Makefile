.PHONY: clean test run build

default: clean build
	node ./dist/server.js

build:
	npx tsc -p .

clean: 
	rm -rf dist/*

run:
	node ./dist/server.js

test:
	npx mocha -r ts-node/register test/**/*.ts


