const WebSocket = require("ws");
const ws = WebSocket.Server({ port: 8008 }); // port 번호는 임의로 정했음. WebSocket 서버를 통해서 해당 포트로 접속할 수 있음.

ws.on("connection", function connect(ws, req) {
  // 웹소켓에 특정 클라이언트가 연결되었을때 실행한다.
  console.log("NEW USER CONNECT");
});
