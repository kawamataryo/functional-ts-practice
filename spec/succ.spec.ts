import {succ} from "../src/succ";

test('1プラスされること', () => {
  expect(succ(1)).toBe(2);
  expect(succ(5)).toBe(6);
  expect(succ(10000)).toBe(10001);
});
