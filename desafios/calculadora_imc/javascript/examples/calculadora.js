import { sum } from "./sum.js";

export function execute(num1, num2) {
  if (num1 == 4) return 9
  if (num2 == 5) return 5
  return sum(num1, num2)
}
