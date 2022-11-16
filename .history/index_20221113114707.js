const WebSocket = require("ws");
const ws = WebSocket.Server({port:8008}); // port 번호는 임의로 정했음. WebSocket 서버를 통해서 해당 포트로 접속할 수 있음.

ws.on("")