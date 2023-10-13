const {tokenVerifier} = require("../helpers/jsonwebtoken")

const authentication = (req,res,next) =>{
    console.log("middleware jalan")
    const access_token = req.headers.access_token

    if (access_token) {
        console.log("token ada")
        try {
            let verifyToken = tokenVerifier(access_token)
            req.userData = verifyToken
            next()
        } catch (error) {
            res.status(401).json({
                message : "token not authenticated"
            })
        }
    } else {
        res.status(404).json({
            message: "token not found"
        })
    }
}

module.exports= { authentication}