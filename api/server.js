// build your server here and require it from index.js
const express = require("express");

const server = express();
const projectRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use(express.json());
server.use("api/project", projectRouter);
server.use("api/resource", resourcesRouter);
server.use("api/task", taskRouter);

server.use("*", (req, res) => {
  res.json({ message: "API is wired!" });
});

module.exports = server;
