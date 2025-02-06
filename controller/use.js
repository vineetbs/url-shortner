const Users = require("../model/user");

async function handleSignup(res, req) {
  const { name, email, password } = req.body;
  Users.create({
    name,
    email,
    password,
  });
  return res.render("home");
}
module.exports = handleSignup;
