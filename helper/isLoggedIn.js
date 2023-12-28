const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (req, res, next) => {
    let token =""
    let authorizationToken = req.header("Authorization");
    console.log(authorizationToken);

    if(authorizationToken){
        token = authorizationToken.replace("Bearer ", "");
        console.log(token);
    }

    if(!token){
        return res.status(401).json({"message": "You are not allowed to view this as this is hidden behind the wall of authentication"})
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = decoded.user;
        next();
    }

    catch(err){
        return res.status(401).json({"message": "Your token is invalid"})
    }
}

