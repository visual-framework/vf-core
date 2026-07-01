FROM nginxinc/nginx-unprivileged:alpine3.23
WORKDIR /app

COPY . /app

COPY ./docker-assets/nginx.conf /etc/nginx/conf.d/default.conf
COPY /app/tools/vf-component-library/build /usr/share/nginx/html

USER 101
