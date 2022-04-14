const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(users);
    //console.log(req.body);
    const { username, password } = req.body;
    //console.log(users[0].hashedPassword);
    //console.log(bcrypt.compareSync(password, users[0].hashedPassword));
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === username &&
        bcrypt.compareSync(password, users[i].hashedPassword)
      ) {
        const safeUser = { ...users[i] };
        delete safeUser.hashedPassword;
        console.log(safeUser);
        return res.status(200).send(safeUser);
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    const password = req.body.password;
    res.status(200).send(req.body);
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);
    req.body.hashedPassword = passwordHash;
    delete req.body.password;
    users.push(req.body);
    console.log(users);
  },
};
