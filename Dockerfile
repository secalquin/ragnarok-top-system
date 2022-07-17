FROM node:14-alpine

# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# TypeScript
RUN npm run build
# Copy all other source code to work directory
ADD ./dist /usr/src/app

# Start
CMD [ "npm", "start" ]