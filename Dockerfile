# Stage 1: Build the React application (Updated to Node 22)
FROM node:22-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your frontend code
COPY . .

# Build the Vite project (compiles into the /dist folder)
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the compiled files from the builder stage into the Nginx server
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]