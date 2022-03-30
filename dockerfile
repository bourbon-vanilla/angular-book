# Stage 1
FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80