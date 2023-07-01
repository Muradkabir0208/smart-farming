const express = require("express");
const app = express();
const spawner = require("child_process").spawn;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

// for testing crop data
app.get("/api/data", (req, res) => {
  const test = [20, 59, 60, 28, 70.3, 7.0, 150.9];

  console.log("data send to python: ", JSON.stringify(test));

  const python_process = spawner("python", [
    "dataCrop.py",
    JSON.stringify(test),
  ]);

  python_process.stdout.on("data", (data) => {
    console.log("Data recived from python: ", JSON.parse(data.toString()));
    res.json(data.toString());
  });
  // res.json(recivedData);
});

// for testing fert data
app.get("/api/fert", (req, res) => {
  const test = [26, 52, 30, 37, 15, 30];

  console.log("fertData send to python: ", JSON.stringify(test));

  const python_process = spawner("python", [
    "dataFerti.py",
    JSON.stringify(test),
  ]);

  python_process.stdout.on("data", (data) => {
    console.log("Data recived from python: ", JSON.parse(data.toString()));
    res.json(data.toString());
  });
  // res.json(recivedData);
});

// @route  POST api/data
// @desc   recives data from frontend
// @access Public
app.post("/api/data", (req, res) => {
  const { data } = req.body;

  console.log("data send to python: ", JSON.stringify(data));

  const python_process = spawner("python", [
    "dataCrop.py",
    JSON.stringify(data),
  ]);

  python_process.stdout.on("data", (data) => {
    console.log("Data recived from python: ", JSON.parse(data.toString()));
    res.json(data.toString());
  });
});

// @route  POST api/fert
// @desc   recives data from frontend
// @access Public
app.post("/api/fert", (req, res) => {
  const { data } = req.body;
  console.log(data);
  console.log("fertData send to python: ", JSON.stringify(data));

  const python_process = spawner("python", [
    "dataFerti.py",
    JSON.stringify(data),
  ]);

  python_process.stdout.on("data", (data) => {
    console.log("Data recived from python: ", JSON.parse(data.toString()));
    res.json(data.toString());
  });
  // res.json(recivedData);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
