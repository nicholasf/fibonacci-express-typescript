FROM mhart/alpine-node:15

RUN apk update && \
    apk upgrade && \
    apk add git

# Create app directory
RUN mkdir -p /srv/fibonacci
WORKDIR /srv/fibonacci

# Install app dependencies
COPY package.json /srv/fibonacci
COPY package-lock.json /srv/fibonacci

RUN npm install

# Bundle app source
COPY . /srv/fibonacci

EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
