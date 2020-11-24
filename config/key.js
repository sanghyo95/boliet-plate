// 배포 했을 경우
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} //로컬 환경인 경우
else {
  module.exports = require("./dev");
}
