# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package manager files and install dependencies
COPY package.json package-lock.json* bun.lockb* ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine AS final

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
