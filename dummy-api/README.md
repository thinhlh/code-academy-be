# Code Academy Dummy API

# Installation and prerequisite

```
npm i

cp ./env/.example.env ./env/dev.env

set -o allexport
source ./env/dev.env
set +o allexport

docker compose --env-file ./env/dev.env up -d
```

# How to run the application

```
npx prisma migrate dev --name init
node src/app.js
```