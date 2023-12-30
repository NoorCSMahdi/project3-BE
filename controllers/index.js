exports.index_get = (req, res) =>{
    res.render("home/index", {"message": "Welcome to Voiture App"})
}