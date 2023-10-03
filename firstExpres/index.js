import express from 'express';
//full path for production next 3 rows
import{dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) =>{
console.log(req.body);
res.sendFile(__dirname + "/public/index.html");
});

app.get("/info",(req,res) =>{
    console.log(req);
    res.send("Just test info !");
    });
    
app.get("/user/:userId",(req,res) =>{
    const user = req.params.userId;
    res.send(`Result of GET - User ID ${user}`);
    });
    

app.get("/costomer/:customerId",(req,res) =>{
    const user = req.params.customerId;
    res.send({customerID : user, name: "custom" + user,respons:'JSON file'});
    });
 
app.get("/download-png",(req,res) => {
    res.download(__dirname + "/images/picture1.png")
    });

app.get("/file-browser",(req,res)=>{
    res.sendFile(__dirname + "/images/picture1.png")
})

app.get("/file-pdf",(req,res)=>{
    res.sendFile(__dirname + "/images/justpdf.pdf")
})

app.post("/form",(req,res) =>{
    res.sendFile(__dirname + "/public/badname.html");
    console.log(req.body); 

    });

app.get("*",(req,res) =>{
   console.log(req);
   res.status(404);
   res.sendFile(__dirname + "/public/error.html")
   });

app.listen(port,()=>{
console.log(`Express started on port ${port}`);
});