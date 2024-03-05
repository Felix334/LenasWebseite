const express = require("express");

const path = require("path");
const app = express();
const PORT = 3001;

// Der Code ist zu 100% richtig -> Hat auch funktioniert

app.use(express.json());

var __dirname = 'C:/Users/Felix/LenasWebseite/Frontend';
var __dirname2 = 'C:/Users/Felix/LenaWebseite/Frontend/index.html';

app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "index.html"));
  //res.render("/Backend/index.html")
  res.sendFile(path.join(__dirname, 'index.html'));
  //res.sendFile(__dirname2)
});


app.post("/api/data", async (req, res, next) => {
  try {
    let data = req.body;
    console.log("Received data:", data);
    await parseData(data);
    console.log(data)
    res.json({ message: "Data received successfully" });
  } catch (err) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
});

async function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  console.error(res.err)
  res.render('error', { error: err })
}


async function parseData(data) {
  console.log(data);
  // Add your data parsing logic here
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
