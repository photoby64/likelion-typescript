// ------------------------------------------------------------------------------
// 📌 클래스 에너테이션 (Class Annotations)
// ⭐️ URL : https://bit.ly/3TsNlEF
// ------------------------------------------------------------------------------
// - 클래스 생성자에 전달될 인자를 받는 매개변수 타입 선언이 필요합니다.
// - 클래스의 인스턴스 프로퍼티 또한 타입 선언이 요구됩니다.
// ------------------------------------------------------------------------------

// 매개변수, 인스턴스 프로퍼티의 타입을 지정해 TypeScript 오류를 해결합니다.

// {
//   class Player {
//     constructor(nickname, role) {
//       this.nickname = nickname;
//       this.role = role;
//     }
//   }

//   const yamoo9 = new Player('yamoo9', '강사');
//   console.log(yamoo9.nickname);
// }


// {
//   class Player {
//     nickname: string;
//     role:'강사'|'학생'|'매니저';

//     // 중복이됨
//     constructor(nickname:string, role:'강사'|'학생'|'매니저') { // 주어진 범주를 좁힘
//       this.nickname = nickname;
//       this.role = role;
//     }
//   }

//   const yamoo9 = new Player('yamoo9', '강사');
//   console.log(yamoo9.nickname);
// }

type ClassMember = '강사' | '학생' | '매니저' | '보조 강사'| '리드 매니저';

class Player {
  nickname: string;
  role: ClassMember;

  constructor(nickname: string, role: ClassMember) {
    this.nickname = nickname;
    this.role = role;
  }
}

const yamoo9 = new Player('yamoo9', '리드 매니저');
console.log(yamoo9.nickname);
