FROM node:20 AS builder

ENV PUPPETEER_SKIP_DOWNLOAD=1

WORKDIR /app

COPY . /app
RUN npm install -g gulp
RUN yarn install
RUN yarn --cwd tools/vf-component-library install
RUN yarn --cwd tools/vf-component-library build

FROM nginxinc/nginx-unprivileged:alpine3.23

COPY ./docker-assets/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/tools/vf-component-library/build /usr/share/nginx/html

USER 101
