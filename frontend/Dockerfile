FROM node:alpine AS node
LABEL author="Daniil Rabizo"
WORKDIR /app/frontend
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/frontend/dist/frontend /usr/share/nginx/html
COPY --from=node /app/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443

