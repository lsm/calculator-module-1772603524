import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './add.js';

test('adds positive integers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('adds negative integers', () => {
  assert.strictEqual(add(-4, -6), -10);
  assert.strictEqual(add(-1, 3), 2);
});

test('adds floats', () => {
  assert.strictEqual(add(1.5, 2.5), 4);
  assert.strictEqual(add(0.1, 0.2), 0.1 + 0.2);
});

test('handles 0 as an operand', () => {
  assert.strictEqual(add(0, 5), 5);
  assert.strictEqual(add(5, 0), 5);
  assert.strictEqual(add(0, 0), 0);
});
