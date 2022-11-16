const WebSocket = require("ws");
const ws = new WebSocket.Server({ port: 8008 }); // port 번호는 임의로 정했음. WebSocket 서버를 통해서 해당 포트로 접속할 수 있음.

let user_id = 0; // 주민등록번호처럼 클라이언트에게 부여되는 고유한 값
let ALL_WS = []; // 전체 유저들을 통제할 수 있도록 각 유저에 대한 websocket, user_id 저장
ws.on("connection", function connect(websocket, req) {
  // 웹소켓에 특정 클라이언트가 연결되었을때 실행한다.
  user_id++;
  console.log("NEW USER CONNECT("+user_id+")");
  ALL_WS.push({ "ws": websocket, "user_id": user_id, "user_name":"" });

  sendUserId(user_id);
  websocket.on("message", function incoming(message) {
    console.log(JSON.parse(message));
    message = JSON.parse(message);
    switch(message.code){
      case "connect_name" : // 사용자 추가 | 이름을 ""에서 변경한다.
      ALL_WS.forEach(function(element, index){
        if(element.user_id== message.user_id){
            element.user_name = message.name;
        }
      });
      console.log(ALL_WS);
        break;
    }
  });
  //ㄹㄹ
  function sendAllUsers(){ // 전체 사용자 정보를 보내는 역할
      let data = {"code"}
      JSON.stringfy(ALL_WS);
      ALL_WS.forEach(function(element, index){
        element.ws.send(JSON.stringify(data));
      }
      
     
  }

  function sendUserId(user_id) {
    let data = { "code": "my_user_id", "msg": user_id };
    websocket.send(JSON.stringify(data));
  }
  // client 에게 id 보내기
  
});

// const WebSocket = require("ws");
// const ws = new WebSocket.Server({port: 8008});
// ws.on("connection", function connect(ws, req){
//   console.log("NEW USER CONNECT");
// });