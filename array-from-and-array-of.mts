import { test, suite } from "node:test";
import { strict as assert } from "node:assert";

suite("Array constructors", () => {
  test("from(Array)", () => {
    const ary = Array.from([1, 2, 3]);
    assert.deepEqual(ary, [1, 2, 3]);
  });
  test("from(ArrayLike)", () => {
    const uint8array = Uint8Array.of(1, 2, 3);
    const ary = Array.from(uint8array);
    assert.deepEqual(ary, [1, 2, 3]);
  });
  test("of(...)", () => {
    const ary = Array.of(1, 2, 3);
    assert.deepEqual(ary, [1, 2, 3]);
  });
});
