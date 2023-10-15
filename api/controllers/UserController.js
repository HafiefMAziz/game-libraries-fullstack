const { user } = require("../models");
const { decryptPwd,encryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");
class UserController {
  static async create(req, res) {
    try {
      const { username, level, email, password } = req.body;
      let result = await user.create({
        username,
        level,
        email,
        password,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getUser(req, res) {
    try {
      const result = await user.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getOneUser(req, res) {
    try {
      const userId = +req.params.id;
      const result = await user.findByPk(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({
        where: { id },
      });
      res.status(200).json({ message: `delete success` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async update(req, res) {
    try {
      const id = +req.params.id;
      let { username, level, email, password } = req.body;
      const oldUser = await user.findByPk(id);
      if(!password) {
        password = oldUser.password;
      }else{
        password = encryptPwd(password)
      }
      console.log(password)
      let result = await user.update(
        {
          username,
          level,
          email,
          password,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({ message: "update success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let emailFound = await user.findOne({
        where: {
          email,
        },
      });
      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);
          console.log(access_token);
          let level = emailFound.level;
          let username = emailFound.username;
          res.status(200).json({ access_token, level, username });
          let verify = tokenVerifier(access_token);
          console.log(verify);
        } else {
          res.status(403).json({
            message: "wrong password",
          });
        }
      } else {
        res.status(404).json({
          message: "user not found",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
