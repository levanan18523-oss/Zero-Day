import { add } from '../../src/utils/helpers';

test('cộng 1 + 2 bằng 3 (adds 1 + 2 to equal 3)', () => {
  expect(add(1, 2)).toBe(3);
});
