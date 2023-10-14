const { tokenVerifier } = require("../helpers/jsonwebtoken");
const { user } = require("../models");
const bcrypt = require("bcrypt");
const authentication = (req, res, next) => {
  console.log("middleware jalan");
  const access_token = req.headers.access_token;

  if (access_token) {
    console.log("token ada");
    try {
      let verifyToken = tokenVerifier(access_token);
      req.userData = verifyToken;
      next();
    } catch (error) {
      res.status(401).json({
        message: "token not authenticated",
      });
    }
  } else {
    res.status(404).json({
      message: "token not found",
    });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await user.findOne({ where: { email } });

    if (!result) {
      return res
        .status(401)
        .json({ message: "Username atau kata sandi salah." });
    }

    const isPasswordValid = await bcrypt.compare(password, result.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Username atau kata sandi salah." });
    }




    req.result = result;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan saat memvalidasi login." });
  }
};

const isAdmin = async (req, res, next) => {
 
  if(req.user && req.user.level === 'admin'){
    next()
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
};

module.exports = { authentication, login,isAdmin };
