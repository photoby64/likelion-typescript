// --------------------------------------------------------------------------
// 📌 멀티 타입 제네릭 (Generics with Multi Types)
// ⭐️ URL : https://bit.ly/3UyK3Ry
// --------------------------------------------------------------------------
// - 하나 이상의 타입을 제네릭으로 설정할 수 있습니다.
// --------------------------------------------------------------------------

{
  function combine<T, A>(o1: T, o2: A): T & A {
    return {
      ...o1,
      ...o2,
    };
  }

  combine<{ type: string }, { useCase: string[] }>(
    { type: "Generic" },
    { useCase: ["일반적인 타입 선언", "호출 과정에서 설정하는 제네릭 타입"] }
  );

  combine<{ name: string; age: number }, { isLive: boolean; hasChildren: boolean }>(
    { name: "박해신", age: 77 },
    { isLive: true, hasChildren: true }
  );
}

// {
//   // 사용자로부터 전달 받는 2개의 타입을 제네릭으로 설정합니다.
//   function combine(o1, o2) {
//     return {
//       ...o1,
//       ...o2,
//     };
//   }

//   combine(
//     { type: 'Generic' },
//     { useCase: ['일반적인 타입 선언', '호출 과정에서 설정하는 제네릭 타입'] }
//   );

//   combine({ name: '박해신', age: 77 }, { isLive: true, hasChildren: true });
// }
