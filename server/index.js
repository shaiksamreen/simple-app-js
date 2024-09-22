const pathModule = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const apiHandler = require("./api/index");

app.use(cors());

app.use("/api/v1", apiHandler);

app.use(express.static(pathModule.resolve(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
