const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
const baseConverter = require("./converte");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  ws.send("Bem vindo! Converta seu número pra binário.");

  ws.on("message", function incoming(message) {
    ws.send(baseConverter(message, 2));
  });
});

app.get("/calc", (req, res) => res.send("Hello World!"));

server.listen(3000, () => console.log(`Lisening on port :3000`));
