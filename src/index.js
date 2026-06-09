//Giải thích: Đây là file chính của ứng dụng.
//Nơi bạn viết code xử lý logic chính.

function sayHello(name) {
    return `Xin chào, ${name}!`;
}

function add(a, b) {
    return a + b;
}

// Xuất hàm để có thể kiểm thử (test)
module.exports = { sayHello, add };
