# Use Node base image with Debian Buster
FROM node:lts-buster

# Install dependencies like ffmpeg, imagemagick, webp
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm install -g pm2 && \
  rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install node dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app
COPY . .

# Expose port if needed (optional)
EXPOSE 5000

# Start the bot
CMD ["node", "ibrahim.js"]