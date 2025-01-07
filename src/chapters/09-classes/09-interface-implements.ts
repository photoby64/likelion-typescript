// ------------------------------------------------------------------------------
// 📌 인터페이스 → 클래스 구현 (Interface Implements'구현')
// ⭐️ URL : https://bit.ly/3OaI9Ef
// ------------------------------------------------------------------------------
// - 인터페이스의 요구사항을 클래스가 구현(implements)하도록 구성할 수 있습니다.
// ------------------------------------------------------------------------------

// Cap 클래스는 Colorful 인터페이스를 구현해야 합니다.
// Print 클래스는 Colorful, Printable 인터페이스를 모두 구현해야 합니다.

// {
//   interface Colorful {
//     color: string;
//   }

//   interface Printable {
//     isPortable: boolean;
//     print(): void;
//   }

//   class Cap {}

//   class Printer {}
// }





{
  interface Colorful {
    color: string;
  }

  interface Printable {
    isPortable: boolean;
    print(): void;
  }

  class Cap implements Colorful {
    // public color: string;
    constructor(public color: string) {}
  }

  class Printer implements Colorful, Printable {
    constructor(public color: string, isPortable:boolean) {

    }
  }


}
