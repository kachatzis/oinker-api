FROM node:11

COPY ./ /usr/src/app
WORKDIR /usr/src/app

EXPOSE 80

RUN npm install
CMD ["npm","run","start"]
