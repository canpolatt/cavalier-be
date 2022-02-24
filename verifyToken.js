import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.AUTH_KEY, (err, user) => {
      err && res.status(403).json("Geçersiz token !");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Giriş yapılmadı !");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.userType) {
      next();
    } else {
      res.status(403).json("Giriş yapmanız gerekli !");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.userType === "ADMIN") {
      next();
    } else {
      res.status(403).json("Yönetici izni bulunamadı !");
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
