# Step 1: Build the app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json /
RUN npm install

# copy the source files
COPY . .

# Build the app
RUN npm run build

#Step 2 : Serve the app with ngnix server
FROM nginx:alpine

# copy built assets from build stage

COPY --from=build /app/dist/ /usr/share/nginx/html

# copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE port 80
EXPOSE 80

CMD ["nginx", "-g","daemon off;"]


#docker build -t my-vite-app .
#docker run -d -p 8080:80 --name vite-container my-vite-app

