# Stage 1: Build the React application
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy your custom Reverse Proxy configuration into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the compiled React files
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]