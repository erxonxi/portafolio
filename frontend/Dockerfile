# syntax=docker/dockerfile:1
FROM node:14
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i -g serve
RUN npm run build
CMD ["serve", "-s", "build"]