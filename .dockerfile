# Stage 1: Build Angular app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve Angular app with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/angularCICD/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]