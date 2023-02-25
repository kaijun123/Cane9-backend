### Cane9-Backend
Built using express, NodeJS (v16.15.0), Supabase, Prisma, Docker

### QuickStart
Create .env file and include a variable called ```DATABASE_URL```, specifying the supabase url
Create a folder in the root directory called ```firebase-config``` , and paste the firebase admin service account json into a file in firebase-config called ```service-account.json```
Run the following commands to start the server

#### Runnning using Nodemon
```
npm install
npm run generate
npm start
```

#### Running using docker
```
// Build the docker image
docker build -t cane-9 .

// Run the docker
docker run -p 3000:3000 cane-9

// To kill the docker
docker kill cane-9
```

#### Tutorials
- Supabase/ Prisma:
  - https://dev.to/prisma/set-up-a-free-postgresql-database-on-supabase-to-use-with-prisma-3pk6
  - Prisma Client: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create-1
  - CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
  - Prisma Seeding: https://www.prisma.io/docs/guides/database/seed-database
  - Prisma CLI: https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-deploy
- Firebase Cloud Message:
  - https://realduck.tech/firebase-push-notifications
  - https://firebase.google.com/docs/cloud-messaging/send-message
- Docker:
  - https://blog.bitsrc.io/lets-dockerize-a-node-express-app-fdba1cf516b2
  - https://rsbh.dev/blogs/rest-api-express-typescript-docker
  - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
  - Docker CLI: https://docs.docker.com/engine/reference/commandline/
  - Python Issue: https://github.com/docker/getting-started/issues/124
