FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build
EXPOSE 8100
CMD ["npm","start"]