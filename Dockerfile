FROM node:lts-alpine
ENV NPM_CONFIG_LOGLEVEL info

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

RUN apk add --no-cache \
  autoconf \
  automake \
  bash \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  libtool \
  make \
  nasm

WORKDIR /usr/app

COPY . .

RUN yarn

EXPOSE 9000