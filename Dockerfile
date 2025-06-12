FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=./db/prisma/schema.prisma

EXPOSE 3000

CMD ["node", "index.js"] 