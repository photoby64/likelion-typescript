// ------------------------------------------------------------------------------
// 📌 DOM + 타입 단언 (Type Assertions)
// ⭐️ URL : https://bit.ly/3O03mkh
// ------------------------------------------------------------------------------
// - TypeScript를 사용할 때 데이터가 DOM 요소 임을 단언해 사용해야 할 경우가 잦습니다.
// ------------------------------------------------------------------------------

// 타입 단언, 익스클레메이션! 마크 등을 사용해 TypeScript가 타입을 알 수 없어 표시한 오류를 해결합니다.

// {
//   const body = document.querySelector('body');
//   const input = body.querySelector('input');

//   body.addEventListener('click', (e) => {
//     console.log('clicked body element');
//   });

//   input.addEventListener('input', () => {
//     let value = input.value;
//     console.log(value);
//   });
// }



// const body = document.querySelector('body') as HTMLBodyElement;
// const input = body.querySelector('input') as HTMLInputElement;

// body.addEventListener('click', (e) => {
//   console.log('clicked body element');
// });

// input.addEventListener('input', () => {
//   const value = input.value;
//   console.log(value);
// });


const body = document.querySelector('body')!;
const input = body.querySelector('input')

body.addEventListener('click', (e:MouseEvent) => {
  e.preventDefault();
  console.log('clicked body element');
});
if (input)
input.addEventListener('input', () => {
  const value = input.value;
  console.log(value);
});








// const body = document.querySelector('body'); // body는 HTMLElement | null 타입
// if (body) {
//   // body가 null이 아닐 경우에만 실행
//   const input = body.querySelector('input'); // input은 HTMLElement | null 타입

//   if (input instanceof HTMLInputElement) {
//     // input이 HTMLInputElement인지 확인 후 실행
//     body.addEventListener('click', (e) => {
//       console.log('clicked body element');
//     });

//     input.addEventListener('input', () => {
//       const value = input.value; // input이 HTMLInputElement로 확인되었으므로 안전
//       console.log(value);
//     });
//   } else {
//     console.error('Input element not found or is not an HTMLInputElement');
//   }
// } else {
//   console.error('Body element not found');
// }
