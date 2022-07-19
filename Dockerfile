FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 3001

RUN npx prisma generate
RUN npm run build
CMD [ "npm", "run", "start" ]