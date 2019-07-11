# base image
FROM node:11.15.0-alpine as build

# set working directory
WORKDIR /app
ENV PATH /app/node_modules/.bind:$PATH
COPY package.json /app/package.json

# install node modules and scripts
RUN npm install --silent
RUN npm install react-scripts@3.0.1 --silent
RUN npm install -g serve
COPY . /app
RUN npm run build

# production environment
WORKDIR /app
CMD ["serve", "-p", "80", "-s", "./build"]
