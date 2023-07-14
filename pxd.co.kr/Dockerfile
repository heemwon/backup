FROM node:15.14.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

EXPOSE 3000
