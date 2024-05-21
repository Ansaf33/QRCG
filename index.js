import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.listen(port,()=>{
  console.log("Port Active " + port);
});

// GETTING THE HOME PAGE 

app.use(express.static("public"));
app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.use(bodyParser.urlencoded({extended:true}));

// WHEN WE CLICK THE FORM

app.post("/submit",(req,res)=>{
  const URL = req.body.url;
  console.log(URL);

var qr_svg = qr.image(URL, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qrcode.png'));
var svg_string = qr.imageSync('I love QR!', { type: 'png' });
  
});
