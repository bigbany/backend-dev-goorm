const WebSocket = require("ws");
const ws = WebSocket.Server({port:8008}); // port 번호는 임의로 정했음. WebSocket 