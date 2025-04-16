import express from "express";

const app = express();

const PORT = 7777;

// http methods
// get,post,put,delete

//

// It accepts 2 parameter
// 1st is route path or access path
// 2nd arrow function (with request and response)

// GET API

app.get("/", (req, res) => {
  try {
    res.send("Home Page");
  } catch (error) {
    console.log(error);
  }
});
app.get("/register", (req, res) => {
  try {
    res.send("Register");
  } catch (error) {
    console.log(error);
  }
});



// app.listen accepts 2 parameter
// 1st is PORT Number
// 2nd is Arrow function with a console message
app.listen(PORT, () => {
  console.log(`Server is Started and Running at ${PORT}`);
});

// http://localhost:7777 ==> / ==> Home Page

// http://localhost:7777/register ==> /register ==> Register

// http://localhost:7777/login ==> /login ==> Hello its a login page













