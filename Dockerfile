FROM nginx:latest

CMD ["nginx", "-g", "daemon off;"]

COPY index.html /usr/share/nginx/html

EXPOSE 80





