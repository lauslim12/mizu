##
# First step: Use Node.js to download and install the dependencies required to build the application.
##
FROM node:16.15.0 AS builder

# Set working directory.
WORKDIR /app

# Copy dependency locks for deterministic builds.
COPY ./package.json ./yarn.lock ./

# Get all of our dependencies.
RUN yarn --frozen-lockfile

# Copy all of our remaining application.
COPY ./ ./

# Build our application.
RUN yarn build

##
# Second step: Use `nginx` image to serve our React application. This is required
# so that our React application can behave properly as a Single-Page Application.
##
FROM nginx:1.22.0-alpine AS production

# Switch working directory to nginx's default place to store HTML files: `/usr/share/nginx/html`.
WORKDIR /usr/share/nginx/html

# Clear the folder, we have no need for the previous files.
RUN rm -rf */

# Copy our built React app from the previous stage.
COPY --from=builder /app/build .

# Expose 80, the normal port which accepts HTTP connections.
EXPOSE 80

# Run the container, the usual nginx way.
CMD ["nginx", "-g", "daemon off;"]
