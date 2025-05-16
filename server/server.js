const express = require("express");
require("dotenv").config();

const app = express();

app.listen(5000, () => {
  console.log(
    `Server is up and running on port 5000 go to http://localhost:5000/`
  );
});
