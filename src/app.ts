// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------
//
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
//
// 이미지, 스타일, 스크립트 파일과 같은 정적 파일을 제공하려면 기본 제공되는 미들웨어 함수를 사용합니다.
// 여러 정적 에셋 디렉토리를 사용하려면 express.static 미들웨어 함수를 여러 번 호출합니다.
//
// ✅ Express.js
// ✅ nodemon, rimraf, ts-node 설치
// ✅ Node.js의 fsPromises.readFile() API 함수 사용
// ✅ Express.js의 라우팅 핸들러(entry) 분리
// ✅ Express.js 앱의 미들웨어(Middleware) - greetingMessage.ts
// ✅ GET 요청/응답 처리
// ✅ https://www.typescriptlang.org/ko/docs/handbook/utility-types.html#picktype-keys
// ✅ 
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------

import 'dotenv/config';
import express from 'express';
import type { Express } from 'express';
import { Request, response } from 'express';
import type User from './types/user';
import { resolve } from 'node:path';
import entryHandler from './handlers/entry';
import greetingMessage from './middlewares/greetingMessage';
import { request } from 'node:http';
import { RequestUser } from './types/user';
import { readFile,writeFile } from 'node:fs/promises';

/* CONFIG. ------------------------------------------------------------------ */

// for Windows Users
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Application -------------------------------------------------------------- */

const app: Express = express();

/* Middleware --------------------------------------------------------------- */

app.use(greetingMessage);
app.use(express.static(resolve(__dirname, '../public')));
app.use(express.json());

/* Routing ------------------------------------------------------------------ */
//
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
//
// --------------------------------------------------------------------------

// GET
// app.get('/', entryHandler);

// POST
// app.post('/', (request, response) => {
//   // 클라이언트 요청 URL
//   console.log(request.url);

//   // 서버 -> 클라이언트 응답
//   response.status(201 /* Created */).send({
//     message: 'POST 요청이 홈페이지로부터 주어졌습니다.',
//   });
// });

/* Users API ---------------------------------------------------------------- */

const dummyUser: User = {
  id: 1,
  name: '박하신',
  gender: '여성',
  age: 25,
};

const dummyUserList: User[] = [dummyUser];

// CREATE ----------------------------------------------------------------------

// `POST /api/users`

app.post('/api/users', 
  async (request: Request<{}, {}, RequestUser>, response) => {
  // 클라이언트 요청(JSON)
  // console.log(request.body);

  // 서버에서 프로그래밍
  const usersString = await readFile(resolve(__dirname, './data/user.json'),{
    encoding:'utf-8'
  });

  const usersJSON : User[] = JSON.parse(usersString);

  console.log(usersJSON);

  // 클라이언트에 응답
  response.status(201).json({});

  // 실패한 경우

});


// READ ------------------------------------------------------------------------

// `GET /api/users`
app.get('/api/users', (request, response) => {
  // Response (to Client)
  response.status(200).json(dummyUserList);
});

// `GET /api/users/:id`

// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`

// `PATCH /api/users/:id`

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id`

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});