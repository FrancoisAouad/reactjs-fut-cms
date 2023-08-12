# Stage 1: Build the React app
FROM node:alpine AS ui-builder

# Set the working directory
WORKDIR '/home/ui'

# Install and cache dependencies first
COPY package*.json ./
COPY .npmrc .npmrc
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app
RUN npm run build

# Stage 2: Create the final image with only the necessary artifacts
FROM nginx

# Copy the built files from the previous stage to Nginx's default web root directory
COPY --from=ui-builder /home/ui/build /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (Nginx default)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
