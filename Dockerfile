FROM node:lts-alpine

RUN apk add --no-cache python3 g++ make

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]