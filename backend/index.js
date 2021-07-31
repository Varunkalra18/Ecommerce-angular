var express = require('express');
var app = express() ;

const cors = require('cors') ;
const bodyParser = require('body-parser') ;
const { ParseSourceFile } = require('@angular/compiler');
app.use(cors())
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded(
  {
    extended:true
  }
));


const product = [{
  id:1,
  name:"Product1",
  quantity:9,
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XFuRxfYf0ZhWQ3TTf6xz6hRqy9krvt9xCTWLBDIWI1PXNjJ040KiOqAf8_rKqd7F9mw&usqp=CAU",
  stars:"40"
},
{
  id:2,
  name:"Varunproduct",
  quantity:10,
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XFuRxfYf0ZhWQ3TTf6xz6hRqy9krvt9xCTWLBDIWI1PXNjJ040KiOqAf8_rKqd7F9mw&usqp=CAU",
  stars:"40"
}] ;

const users = [
  {
    username:'varunKalra',
    email:'kalravarun1999@gmail.com',
    password:'secret',
  },
  {
    username:'gaganKalra',
    email:'kalragagan1999@gmail.com',
    password:'secret',
  }
];


app.post("/login", function(req,res){
  const username = req.body.username ;
  const password = req.body.password ;
  const authenticated = users.find(element => element.username == username && element.password == password) ;
  if(authenticated)
  {
    res.json({
      username: username,
      message:"blown successfully",
      token:"asssjjjjjjjjjjsaa",
      email: authenticated.email
    }) ;
  }
  else{
    res.json({
      message:"user not found"
    });
  }
}) ;

app.get("/getProductList", function(req,res){
    res.json(product) ;
}) ;
app.get("/getProductDetails/:id", function(req,res){
  const products = product.find(element => element.id == req.params.id) ; 
  res.json(products) ;
});
app.get("/deleteProduct/:id", function(req,res){
  const indexs = product.findIndex(element=>element.id == req.params.id) ;
  product.splice(indexs,1) ;
  res.json(product) ;
});
app.get("/increaseProductQuant/:id", function(req,res){
  const index = product.findIndex(element => element.id == req.params.id) ;
  product[index].quantity += 1 ;
  res.json(product);
});
app.get("/decreaseProductQuant/:id", function(req,res){
  const index = product.findIndex(element => element.id == req.params.id) ;
  product[index].quantity -= 1 ;
  res.json(product);
});
app.post("/addProduct",function(req,res){
  product.id = this.productList.length + 1 ;
  this.productList.push(product);
})
app.listen(3000) ;