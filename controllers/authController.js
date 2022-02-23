import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

// DATA TRANSFER OBJECTS

const authDTO = (user,accessToken) => {
  return {
    name: user.name,
    surname: user.surname,
    email: user.email,
    userType: user.userType,
    accessToken: accessToken
  }
}

// USER REGISTRATION

const registerUser = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// USER LOGIN

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    !user &&
      res.status(401).json("Hata ! Lütfen bilgilerinizi kontrol ediniz.");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    );
    const decodedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    decodedPassword !== req.body.password &&
      res.status(401).json("Hata ! Lütfen bilgilerinizi kontrol ediniz.");

    const accessToken = jwt.sign(
      {
        id: user._id,
        userType: user.userType,
      },
      process.env.AUTH_KEY,
      { expiresIn: "3d" }
    );

    res.status(200).json(authDTO(user._doc,accessToken));
  } catch (err) {
    res.status(500).json(err,"Hata ! Mail adresi bulunamadı.");
  }
};

export { registerUser, loginUser };
