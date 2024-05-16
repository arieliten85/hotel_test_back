const bcrypt = require("bcrypt");
const User = require("../models/User");

class UserControllers {
  static async register(req, res) {
    const { name, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send({ error: "Incorrect password" });
      }

      const dataUser = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      res.status(200).send(dataUser);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}

module.exports = UserControllers;
