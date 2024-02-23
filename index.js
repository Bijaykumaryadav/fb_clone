//setting express server
const express = require("express");
const app = express();
const port = 8000;
app.listen(port,function (err) {
  try {
    if (port) {
      console.log("Server is running on the port", port);
    }
  } catch (err) {
    console.log("Error in creating the server", err);
  }
});
