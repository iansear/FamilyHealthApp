const express = require("express")
const router = express.Router()

router.post("/signout", (req, res) => {
    req.session.destroy
    res.redirect("/login")
  })  
  

router.get("/", (req,res)=>{
    models.family.findAll().then(families => res.render("family", {families: families}))
})


module.exports = router