const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
require("./db/conn");
const hbs = require("hbs");

const templates_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/register", (req, res) =>{
    res.render("register");
})

app.get("/login", (req, res) =>{
    res.render("login");
})


// If theres an error, the error will be thrown.

app.listen(port, function(error){
    if(error) throw error;
    console.log(`Server is running at port number ${port}`);
});

