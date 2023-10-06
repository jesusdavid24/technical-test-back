# Backend technical test users GitHub 💻

Main base of the services used within the Make It Real platforms

- Built with Node.js and Express
- Typescript
- Prisma ORM
- REST API

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x - Install with Volta.sh

## Express Router and Routes

| Route            | HTTP Verb | Route Middleware | Description           |
| ---------------- | --------- | ---------------- | --------------------- |
| /api/healthcheck | GET       |                  | Show a simple message |
| /api/users       | POST      |                  | Save a new users      |

## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### SaveUser **user** `/api/users`

Request Body:

```json
{
  "avatar_url": "https://avatars.githubusercontent.com/u/33149?v=4",
  "name": "carlos",
  "followers": 5
}
```

Response:

```json
{
 {
    "avatar_url": "https://avatars.githubusercontent.com/u/33149?v=4",
    "name": "carlos",
    "followers": 5
}
}
```

### Developing

1. Clone the repository

2. Run `npm install` to install server dependencies.

3. Configure the env running `cp .env.example .env`

4. Update `.env` with the required info

5. Run the migrations: `prisma migrate dev`

6. Run `npm run dev` to start the development server.

7. The database is already deployed and you can use it without any inconvenience.

## Author ✒️

- **Jesus David Bravo Vergara** - [jesusdavid24](www.linkedin.com/in/jesusdavidb)

## License

[MIT](LICENSE)
