const {user} = require("../models")
const {decryptPwd} = require("../helpers/bcrypt")
const {tokenGenerator ,tokenVerifier} = require('../helpers/jsonwebtoken')
class UserController {
  static async create(req, res) {
    try {
        const {username,level,email,password} = req.body
        let result = await user.create({
            username,
            level,
            email,
            password,
        })
        res.json(result)
    } catch (error) {
        res.status(500).json(error)
    }
  }
  static async delete(req, res) {}

  static async login(req,res){
    try {
        const {email,password} = req.body
        let emailFound = await user.findOne({
            where : {
                email,
            }
        })
        if(emailFound){
            if(decryptPwd(password,emailFound.password)){
                let access_token = tokenGenerator(emailFound)
                console.log(access_token)
                res.status(200).json({access_token})
                let verify = tokenVerifier(access_token)
                console.log(verify)
            } else {
                res.status(403).json({
                    message : "wrong password"
                })
            }
        } else {
            res.status(404).json({
                message:"user not found"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
  }
}

module.exports = UserController;
