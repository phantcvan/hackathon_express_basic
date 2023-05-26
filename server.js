const express = require("express");
const server = express();
const port = 8000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors=require("cors");

// import routes
const noteRoutes = require("./routes/note.routes");



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.static("public"));
server.use(cors());

server.use("/api/v1/notes", noteRoutes);




server.listen(port, (err, res) => {
    console.log(`http://localhost:${port}`);
})