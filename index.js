const express = require("express");
const app = express();
const port = 3000;
const programmingLanguagesRouter = require("/home/fiftycentsjj/Downloads/nodejs_exercise/programming-languages-api/routes/programmingLanguages");
const user_infoRouter = require("/home/fiftycentsjj/Downloads/nodejs_exercise/programming-languages-api/routes/user_info");


app.use(express.json());
app.use(express.urlencoded({extended: true})
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/programming-languages", programmingLanguagesRouter);
app.use("/user_info", user_infoRouter);
/* Error handler middleware */

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});