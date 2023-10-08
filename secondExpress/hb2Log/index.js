import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { printURL } from "./constants.js";
import routs from "./router.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
//static files
const staticFiles = express.static("public");

const app = express();
const port = 3000;

app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.use(staticFiles);
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use(morgan("tiny"));
//custom mid
app.use(printURL);

//router

app.use(routs);
// app.get("/", (req, res) => {
//   res.render("home", { menuItems });
// });
// app.post("/", (req, res) => {
//   const { username, password } = req.body;
//   // Add your authentication logic here
//   // For demonstration purposes, we'll just send a success message
//   res.send("Login Successful!");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact", { menuItems });
// });

// app.get("/services", (req, res) => {
//   res.render("services", { menuItems });
// });

// app.get("/random", (req, res) => {
//   res.render("random", { menuItems });
// });

// app.get("/about", (req, res) => {
//   res.render("about", { menuItems });
// });

app.get("/band", (req, res) => {
  res.sendFile(__dirname + "/public/bandNameGenerator.html");
});
app.post("/band", (req, res) => {
  var newBandName = req.body["word1"] + req.body["word2"];
  res.send(`<h2>new band name is ${newBandName} &ensp; </h2><a> back to home page</a>&ensp;
  <a href="/" class="button">GO</a>`);
});

app.listen(port, () => {
  console.log(`Port ${port} run !`);
});
