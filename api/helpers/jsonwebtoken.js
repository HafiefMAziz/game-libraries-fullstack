const jwt = require("jsonwebtoken");
const secretCode = "games";

const tokenGenerator = (data) => {
  const { id, username, level, email } = data;
  return jwt.sign({ id, username, level, email }, secretCode);
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
