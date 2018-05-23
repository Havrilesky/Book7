console.log("starting combined server");

const express = require("express");
const app = express();

var WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({
    port: 8090
  });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  ws.send("no way asshat");
});

app.get("/", (req, res) => {
  res.send("HEY!");
});
app.listen(3000, () => console.log("Server running on port 3000"));
