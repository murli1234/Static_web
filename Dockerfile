FROM nginx:latest

CMD ["nginx", "-g", "daemon off;"]

COPY . /usr/share/nginx/html

EXPOSE 80





