# Background

This a mini project so I can just revise using Typescript with Node, along with a configuration I can polish. It's a coding exercise I used to set for applicants interviewing for various teams in various companies. It's an implementation of the Fibonacci sequence, taking a position number and returning the corresponding Fibonacci number. 

The exercise exposes:
* basic coding ability via recursion
* how to structure a RESTful web service
* how to test the service.

I've found it helpful as a revision topic. Most of what I have to revise is not how to program generally but the various config surrounding a program's business logic.

## Install

I wrote this using node v12.19.0. Any recent version of Node should work.

Then ...

```bash
npm install
make
```

## Example

```bash
> curl locahost:3000/11
{"position":11,"number":89}%
```

## Docker

Alternatively, you can just run 

```bash
make docker
```

Then issue curl commands against port 3000 locally.

You will have to `docker ps` and run `docker stop` on the corresponding container to shut it down.

E.g.

```bash
♪  fibonacci-express-typescript git:(dockerise-it) ✗ docker ps
CONTAINER ID   IMAGE                        COMMAND                  CREATED          STATUS          PORTS                    NAMES
9356b2146637   nicholasf/fib-ts-fibonacci   "node ./dist/server.…"   23 seconds ago   Up 22 seconds   0.0.0.0:3000->3000/tcp   busy_bartik
♪  fibonacci-express-typescript git:(dockerise-it) ✗ docker stop busy_bartik
busy_bartik
```

