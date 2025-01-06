// ------------------------------------------------------------------------------
// 📌 옵셔널 프로퍼티 (Optional Properties)
// ⭐️ URL : https://bit.ly/3hAmKbo
// ------------------------------------------------------------------------------
// - 객체에 지정된 에너테이션 중 일부를 선택적으로 설정할 수 있도록 지정할 수 있습니다.
// ------------------------------------------------------------------------------

{
  type Point = {
    x: number; // 필수!
    y: number; // 필수!
    z?: number; // 선택 Optional 뒤에 물음표
  };

  const generatePoint = (x: number, y: number): Point => {
    return { x, y, z: 10 };
  };

  const calcPointValues = (point: Point) =>
    Object.entries(point).reduce((total, [, value]) => total + value, 0);

  const anyPoint: Point = { x: 10, y: -20 };

  calcPointValues(anyPoint);
}
