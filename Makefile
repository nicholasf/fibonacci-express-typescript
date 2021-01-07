.PHONY: clean

default:
	npx tsc -p .

clean: 
	rm -rf dist/*

run:
	node ./dist/server.js


