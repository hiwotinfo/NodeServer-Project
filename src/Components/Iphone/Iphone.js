// import React, {useState, useEffect} from 'react'
// import{Link} from "react-rout-dom"

// export const Iphone = () => {
  
//     const [products, setProducts] = useState([]);

const express = require("express");
const mySql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");


const app = express();

let crosOptions = {
  origin: ["http://www.evangadi.com", "http://localhost:3001/iphones"], optionsSuccessStatus: 200, };///to give permition sepcific to access our database 



app.use(cors(crosOptions));//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.url)


const mySqlConnection = mySql.createConnection({
    user: "myDBuser",
    password: "myDBuser",
    host: "localhost",
    database: "myDB",
  });
  
  mySqlConnection.connect();
  (err) => {
    if (err) console.log(err);
    else console.log("conected");
  };





  app.get("/iphones", (req, res) => {


    let result = 
    "SELECT products.product_name, ProductPrice.starting_price, ProductPrice.price_range, ProductDescription.product_description, product_description.product_img From product JOIN ProductPrice ON ProductPrice.product_id = product.product_id JSON ProductDescription on ProductPrice.product_id=product_description.product_id";
    mySqlConnection.query(
      
      result,

      function (err, result, fileds) {
        if (err) throw err;
        res.send (result)
      }
    );

  });
 



mySqlConnection.query






  
app.listen(3001, () => console.log("Listing to: 3001"));