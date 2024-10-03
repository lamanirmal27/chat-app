const express = require('express')
const http = require("http");
const socketIo = require("socket.io");
const PORT = process.env.PORT || 5050;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");

app.use(credentials);
app.use(cors(corsOptions));

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
