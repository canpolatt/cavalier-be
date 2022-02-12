import User from "../models/User.js";

const registerUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const loginUser = async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.body.email
        });

        !user && res.status(401).json("Hata ! Lütfen bilgilerinizi kontrol ediniz.")
        user.password !== req.body.password && res.status(401).json("Hata ! Lütfen bilgilerinizi kontrol ediniz.");

        const { password,createdAt,updatedAt,address,__v, ...others} = user._doc;
        res.status(200).json({...others});


    } catch(err){
        res.status(500).json(err);
    }
    
}

export { registerUser, loginUser }





