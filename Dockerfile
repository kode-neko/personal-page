FROM nginx
WORKDIR /app
COPY ./dist /usr/share/nginx/html
EXPOSE 80