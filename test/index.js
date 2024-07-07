const fs = require("fs");
const path = require("path");

const generatedFilePath = path.join(__dirname, "./demo.out.wxss");
const expectedFilePath = path.join(__dirname, "./expect.wxss");

const generatedContent = fs.readFileSync(generatedFilePath, "utf8");
const expectedContent = fs.readFileSync(expectedFilePath, "utf8");

if (generatedContent === expectedContent) {
  console.log("测试通过：生成的样式文件符合预期。");
} else {
  console.error("测试失败：生成的样式文件与预期不符。");
  process.exit(1); // 非0退出码表示错误
}
