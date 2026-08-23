import { execute } from "./calculadora.js";

import assert from "node:assert"

assert.strictEqual(execute(4, 5), 4)
assert.notStrictEqual(execute(2, 5), 4)
assert.strictEqual(execute(2, 5), 5)
assert.strictEqual(execute(3, 3), 6)

console.log("all tests ok")