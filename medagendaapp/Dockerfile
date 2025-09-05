FROM node:20-alpine AS build
WORKDIR /home/app

# Copia apenas os arquivos de dependência primeiro (cache no npm install)
COPY package*.json ./

RUN npm install -g @angular/cli@17.3.10 && \
    npm install

# Agora copia o resto do código
COPY . .

RUN ng build --configuration production

# Nginx como servidor
FROM nginx:stable-alpine-slim
COPY --from=build /home/app/dist/medagendaapp/browser /usr/share/nginx/html
COPY --from=build /home/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
