# Use official nginx image
FROM nginx:alpine

# Copy static files to nginx html directory
COPY . /usr/share/nginx/html

# Expose port 8001
EXPOSE 8001

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
