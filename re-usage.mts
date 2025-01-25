import { strict as assert } from "node:assert";
import { test } from "node:test";
import { re } from "./re.mts";

const digit = re`[0-9]`;
const digitNonZero = re`[1-9]`;
const sign = re`[+-]`;
const decimal = re`${sign}?${digitNonZero}${digit}*|${sign}?${digit}`;
const decimalOnly = re`^${decimal}$`;

test("decimal", async (t) => {
  await t.test("valid", () => {
    assert.ok(decimalOnly.test("123"));
    assert.ok(decimalOnly.test("+789"));
    assert.ok(decimalOnly.test("-0"));
  });
  await t.test("invalid", () => {
    assert.ok(!decimalOnly.test("foo"));
    assert.ok(!decimalOnly.test("3.14"));
    assert.ok(!decimalOnly.test("001"));
  });
});
