# Stage 1
FROM node as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80