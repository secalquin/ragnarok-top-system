FROM node:16 as builder
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci
RUN npx prisma generate
COPY . .
RUN npm run build

FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm ci --production
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 8080
CMD [ "node", "dist/app.js" ]