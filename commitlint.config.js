module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',     // tính năng mới (new feature)
      'fix',      // sửa lỗi (bug fix)
      'docs',     // tài liệu (documentation)
      'refactor', // tái cấu trúc (refactoring)
      'test',     // kiểm thử (testing)
      'chore',    // việc vặt (maintenance)
      'ci',       // cải thiện CI/CD (CI/CD improvements)
      'perf'      // tối ưu hiệu năng (performance)
    ]]
  }
};
