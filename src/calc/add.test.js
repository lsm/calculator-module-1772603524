import { add } from './add.js';
import assert from 'node:assert/strict';

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);

console.log('All add tests passed.');
