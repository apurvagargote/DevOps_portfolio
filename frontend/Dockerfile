FROM node:18-alpine as build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . ./

# Set homepage to root for Docker deployment
RUN sed -i 's|"homepage": "https://apurvagargote.github.io/devops-portfolio"|"homepage": "/"|g' package.json

# Build the application
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy the build output
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]