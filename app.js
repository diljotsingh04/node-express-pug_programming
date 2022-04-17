const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// initialize engine as pug
app.set('view engine', 'pug');

// to get data from forms
app.use(express.urlencoded());

app.set('views', path.join(__dirname, 'views'));

app.post('/', (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let result = `{ name: ${name}, email: ${email}, password: ${password} }\n`
    fs.appendFileSync("output.txt", result);

    res.status(200).render('demo', { title: 'Hey', message: 'This is the pug file' })
    // console.log(req.body);
})
  


app.listen(80,()=>{
    console.log("Server started successfully");
});