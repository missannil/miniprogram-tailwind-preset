const fs = require("fs");
const path = require("path");
const os = require("os");
const generatedFilePath = path.join(__dirname, "./demo.out.wxss");
const expectedFilePath = path.join(__dirname, "./expect.wxss");

const generatedContent = fs.readFileSync(generatedFilePath, "utf8");

let expectedContent = fs.readFileSync(expectedFilePath, "utf8");
// 如果expectedContent最后有换行符，去掉
if (expectedContent.endsWith("\r\n")) {
  expectedContent = expectedContent.slice(0, -2);
} else if (expectedContent.endsWith("\n")) {
  expectedContent = expectedContent.slice(0, -1);
}
if (generatedContent === expectedContent) {
  console.log("测试通过：生成的样式文件符合预期。");
} else {
  console.error("测试失败：生成的样式文件与预期不符。");
  process.exit(1); // 非0退出码表示错误
}
