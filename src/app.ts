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
// ✅ Node.js 함수(API)를 사용해 로컬 드라이브 파일 읽기 및 JS 객체 변환
// ✅ Users 데이터 파일 읽기/쓰기 유틸리티 함수 작성 / 요청, 응답 처리
// ✅ 동적 파라미터를 요청받아 서버에서 클라이언트로 응답 처리 과정
// ✅ usersRouter 분리
// ✅ usersRouter 분리 (유지 관리 용이) Part 1.
// ✅ 
// ✅ 
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// --------------------------------------------------------------------------

import 'dotenv/config';
import { resolve } from 'node:path';
import express from 'express';
import type { Express } from 'express';
import usersRouter from './routes/users';


// import { Request, response } from 'express';
// import type User from './types/user';
// import entryHandler from './handlers/entry';
// import greetingMessage from './middlewares/greetingMessage';
// import { request } from 'node:http';
// import { RequestUser } from './types/user';
// import { readFile,writeFile } from 'node:fs/promises';
// import { readUsers, writeUsers } from './lib/users';
// import { error } from 'node:console';







/* CONFIG. ------------------------------------------------------------------ */

// for Windows Users
const HOSTNAME = 'localhost';
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;









/* Application -------------------------------------------------------------- */

const app: Express = express();








/* Middleware --------------------------------------------------------------- */

// app.use(greetingMessage);
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

// const dummyUser: User = {
//   id: 1,
//   name: '박하신',
//   gender: '여성',
//   age: 25,
// };

// const dummyUserList: User[] = [dummyUser];

app.use('/api/users', usersRouter);






// CREATE ----------------------------------------------------------------------

// // `POST /api/users`
// app.post(
//   '/api/users',
//   async (request: Request<{}, {}, RequestUser>, response) => {
//     // 클라이언트 요청(JSON)
//     console.log(request.body);



//     // ⭐️서버에서 프로그래밍⭐️

//     // data/users.json 파일에 쓰기
//     // fsPromises.writeFile()

//     // data/users.json 파일 읽기
//     // fsPromises.readFile() -> lib으로 분리
//     // 1. 데이터 파일 읽기
//     const users = await readUsers(); 

//     // 새롭게 생성될 사용자(Users) 객체
//     const newId = users.length + 1;
//     // const newId = crypto.randomUUID(); //랜덤 아이디
//     const newUser : User = {
//       id: newId,
//       // name: request.body.name,
//       // gender: request.body.gender,
//       // age: request.body.age -> 구조분해할당
//       ...request.body,
//     }



//     // 2. 데이터 파일 쓰기
//     // 기존의 Users 배열에 새 유저를 추가
 
//     try {
//       // 클라이언트에 응답
//       // 성공한 경우
//       await writeUsers(newUser);
//       response.status(201).json(newUser);
//     } catch (error: unknown) {
//       // 실패한 경우
//       response.status(401).json({
//         message: '이런... 사용자 정보 생성에 실패했습니다.. 😭',
//       });
//     }
//   }
// );







// // READ ------------------------------------------------------------------------

// // `GET /api/users`
// app.get('/api/users', async (request, response) => {
//   // Response (to Client)
//   // response.status(200).json(dummyUserList);

//   try {
//     const users = await readUsers();
//     // throw new Error('oops');

//     response.status(200).json(users);
    
//   }catch (error: unknown){
//     response.status(500).json({
//       message: '알수없는 오류가 발생했습니다!...😎'
//     });
//   }
// });







// // `GET /api/users/:id`

// app.get('/api/users/:id', async(request, response) => {
//   // request params /:id
//   // console.log(request.params.id);

//   const { id } = request.params;

//   try{
//     const users = await readUsers();
    
//     // 요청된 id 값과 일치하는 사용자가 존재하는지 검토
//     const requestUser = users.find(user => user.id === Number(id));
//     // console.log(requestUser);
//     if (requestUser) {
//       // 요청한 사용자 정보가 있을 경우
//       // response
//       response.status(200).json({requestUser});
//     } else {
//      // 요청한 사용자 정보가 없는 경우
//      response.status(500).json({
//       message: '알수없는 오류가 발생했습니다!...😎'
//      });
//     }
    
//   } catch (error: unknown) {}



// })


// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`

// `PATCH /api/users/:id`

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id`

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});