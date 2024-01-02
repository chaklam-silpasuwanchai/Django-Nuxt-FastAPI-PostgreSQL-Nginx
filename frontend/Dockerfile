# pull official base image
FROM node:lts-slim

# set work directory
WORKDIR /src/app/

# add to $PATH
ENV PATH /src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./
