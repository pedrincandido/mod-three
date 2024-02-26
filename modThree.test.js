import { modThree } from "./modThree";

describe('modThree function', () => {
  test('should return 1 for binary string "1101"', () => {
    expect(modThree("1101")).toBe(1);
  });

  test('should return 2 for binary string "1110"', () => {
    expect(modThree("1110")).toBe(2);
  });

  test('should return 0 for binary string "1111"', () => {
    expect(modThree("1111")).toBe(0);
  });

  test('should return 0 for binary string "101010"', () => {
    expect(modThree("101010")).toBe(0);
  });

  test('should return 0 for binary string "110110"', () => {
    expect(modThree("110110")).toBe(0);
  });

  test('throws an error for invalid input', () => {
    expect(() => modThree("1102")).toThrow(Error);
  });
});
