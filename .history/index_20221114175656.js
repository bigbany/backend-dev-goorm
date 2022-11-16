const WebSocket = require("ws");
const ws = new WebSocket.Server({ port: 8008 }); // port 번호는 임의로 정했음. WebSocket 서버를 통해서 해당 포트로 접속할 수 있음.

let user_id = 0;
let ALL_WS = []; // 전체 유저들을 통제할 수 있도록 각 유저에 대한 websocket, user_id 저장
ws.on("connection", function connect(websocket, req) {
  // 웹소켓에 특정 클라이언트가 연결되었을때 실행한다.
  console.log("NEW USER CONNECT");
});
