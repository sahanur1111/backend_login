import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect(`mongodb+srv://sahanurlohapur:oXp6qjV7BMG6vjUa@messages.kucopmq.mongodb.net/?retryWrites=true&w=majority&appName=Messages`, {
    dbName: "backend",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

  

  const messagesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
  })

  const Message  = mongoose.model("Message", messagesSchema)

const app = express();



// middle ware.......***********
// static file
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

// api **************
app.get("/", (req, res) => {
  res.render("index", { name: "Kohinur Parvin" });
  // res.sendFile("index.html")
});

app.get("/add", async (req, res) => {
  
 await Message.create({name:"Alam", email:"sahanur.lo@gmail.com", password:"123456"})
 
    res.send("Nice");
});

app.get("/success", (req, res) => {
  res.render("success");
});

// api
app.post("/contact", async (req, res) => {
  // const messagesData = ({
  //   username: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // });
  // console.log(messagesData);
    
  const {name, email, password} = req.body

  await Message.create({name, email, password});
  // await Message.create({name:name, email:req.body.email, password:req.body.password})
  res.redirect("/success"); //m1
  // res.render("success");//m-2
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5001, () => {
  console.log("server is working");
});
