FROM node:lts-alpine
ENV NPM_CONFIG_LOGLEVEL info

WORKDIR /usr/app

COPY . .

RUN yarn &&\
  yarn build

CMD yarn serve

EXPOSE 9000