FROM nginxinc/nginx-unprivileged:alpine3.23

COPY ./docker-assets/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./tools/vf-component-library/build /usr/share/nginx/html

USER 101
