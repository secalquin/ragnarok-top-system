FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 8080

RUN npx prisma generate
RUN npm run build
CMD [ "npm", "run", "start" ]