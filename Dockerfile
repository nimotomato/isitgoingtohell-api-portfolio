FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

# COPY server.key server.cert ./

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]