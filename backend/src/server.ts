import express from "express";

const app = express();

app.listen(3333, () => {
  console.log("HTTP Server Running!");
});

app.get("/users", (req, res) => {
  return res.send("hello world");
});
