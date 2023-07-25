FROM node:alpine AS prod

RUN apk update && apk upgrade

WORKDIR /usr/app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

COPY . .

RUN npm install

USER nodejs

EXPOSE 4000

CMD [ "node", "main.js" ]
