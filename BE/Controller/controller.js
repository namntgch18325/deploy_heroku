const express= require('express');
const app = express();

app.use(express.json())

exports.GetHomePage = (rep,res) => 
{
    res.render("home");
}

exports.GetHomeDetail = (rep,res) => 
{
    res.render("detail");
}