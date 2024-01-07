# pull official base image
FROM node:lts-slim

# set work directory
WORKDIR /src/app/

# add to $PATH
ENV PATH /src/app/node_modules/.bin:$PATH

RUN --mount=type=bind,source=./package.json,target=package.json,readwrite \
    --mount=type=bind,source=./package-lock.json,target=package-lock.json,readwrite \
    --mount=type=cache,target=/root/.yarn \
    yarn install 

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# add app
COPY . ./
