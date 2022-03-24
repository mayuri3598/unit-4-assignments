const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const batchController = require("./controllers/batch.controller");
const studentController = require("./controllers/student.controller");
const evaluationController = require("./controllers/evaluation.controller");
const submissionController = require("./controllers/submission.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/batchs", batchController);
app.use("/students", studentController);
app.use("/evaluations", evaluationController);
app.use("/submissions", submissionController);

app.listen(3333, async function () {
  try {
    await connect();
    console.log("listening on port 3333");
    
  } catch (e) {
    console.log(e.message);
  }
});
