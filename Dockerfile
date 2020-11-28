FROM node:lts-alpine
ENV NPM_CONFIG_LOGLEVEL info

RUN apk add --no-cache \
  autoconf \
  automake \
  bash \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  make \
  nasm

WORKDIR /usr/app

COPY . .

RUN yarn &&\
  yarn build

CMD yarn serve

EXPOSE 9000