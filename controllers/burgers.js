const express = require('express');
var router = express.Router()
var db = require('../models/')

router.get('/', function (req , res){
    res.redirect('/burgers')
});

router.get("/burgers", function(req, res) {
       db.Burger.findAll().then( function(burgerData) {
           console.log(burgerData)
         res.render("index", { burger_data: burgerData });
       });
     });
router.post("/burgers/create", function(req, res) {
           db.Burger.create(
               {
                   burger_name: req.body.burger_name

               }).then(
            
               function(burgerData) {
             res.redirect("/")
             console.log(burgerData)
           });
         });

 router.put("/burgers/:id", function(req, res) {
    db.Burger.update(
        {
            devoured: true,
        },
        {
            where: {
                id:  req.params.id
            }
        } ).then (
        function(burgerData) {
        console.log(burgerData)
        res.json('/')
     });
});

module.exports = router;