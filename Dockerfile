# First step: Use Node.js to download and install.
FROM node:16.15.0 AS app

# Set working directory.
WORKDIR /app

# Copy dependency locks.
COPY ./package.json ./yarn.lock ./

# Get all of our dependencies.
RUN yarn --frozen-lockfile

# Copy all of our remaining application.
COPY ./ ./

# Build our application.
RUN yarn build

# Second step: Use `nginx` image to serve our React.
FROM nginx:1.22.0-alpine AS production

# Switch working directory to nginx's default place to store HTML files: `/usr/share/nginx/html`.
WORKDIR /usr/share/nginx/html

# Clear the folder.
RUN rm -rf */

# Copy our built React app.
COPY --from=app /app/build .

# Expose 80.
EXPOSE 80

# Run thin container.
CMD ["nginx", "-g", "daemon off;"]
