# Use the official Buildpacks builder
FROM gcr.io/buildpacks/builder:v1

# Set the working directory for the app
WORKDIR /app

# Copy the app code into the container
COPY app/ .

# Set the build environment variables
ARG APP_DIRECTORY=app
ENV NODE_ENV=production
ENV PORT=8080

# Build the app using Buildpacks
RUN --mount=type=cache,target=/tmp/cache PACK_CACHE=/tmp/cache \
  /bin/bash -c "pack build --builder gcr.io/buildpacks/builder:v1 \
  --env NODE_ENV=$NODE_ENV \
  --env PORT=$PORT \
  --env APP_DIRECTORY=$APP_DIRECTORY \
  --path . \
  --cache-image gcr.io/buildpacks/cached-builder:v1 \
  coursessor-image"
