const express = require("express");
const app = express();
const connectDb = require('./db/conn');
const port = process.env.PORT || 3000;

connectDb();

const path = require("path");
const Register = require("./models/registers");
const hbs = require("hbs");

const templates_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );


// Accessing hbs files through express.js
app.use(express.json({extended:false}));
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get("/", (req, res) =>{
    res.render("index");
});

// Create a new user on register
app.get("/register", (req, res) =>{
    res.render("register");
})

app.post('/register', async (req, res) =>{
    try
    {
        const password = req.body.password;
        const cpassword = req.body.confirmpass;

        if(password == cpassword)
        {
            const registerUser = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                phone : req.body.phone,
                username : req.body.username,
                password : password,
                confirmpass : cpassword,
                age : req.body.age,
                gender : req.body.gender
            })

            const registered = await registerUser.save();
            res.status(201).render(index);
        }
        else
        {
            res.send("Passwords do not match.")
        }
    }
    catch(error)
    {
        res.status(400).send(error);
    }
})

// Login user
app.get("/login", (req, res) =>{
    res.render("login");
})

app.post("/login", async(req, res) =>{
    try 
    {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({email:email});
        
        if(userEmail.password == password)
        {
            res.status(201).render("index");
        }
        else
        {
            res.send("Password is wrong");
        }
    }
    catch(error)
    {
        res.status(400).send("Invaild Email");
    }
})


// If theres an error, the error will be thrown.
app.listen(port, function(error){
    if(error) throw error;
    console.log(`Server is running at port number ${port}`);
});

module.exports = app;

