FROM node:20-alpine AS build
COPY . /home/app/
RUN npm install -g @angular/cli@17.3.10
WORKDIR /home/app/
RUN npm install --save && ng build

FROM nginx:stable-alpine-slim
COPY --from=build /home/app/dist/medagendaapp/browser/ /usr/share/nginx/html
COPY --from=build /home/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80