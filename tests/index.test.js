// Dùng để đảm bảo code chạy đúng như mong đợi.

const { sayHello, add } = require('../src/index');

test('sayHello trả về đúng chuỗi chào', () => {
    expect(sayHello('Phát')).toBe('Xin chào, Phát!');
});

test('add tính đúng tổng 2 số', () => {
    expect(add(2, 3)).toBe(5);
});
