const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("token is invalid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Your are not authenticated");
  }
};
const verifyTokenandAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Your are not allowed to do that");
    }
  });
};
const verifyTokenandAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if ( req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Your are not allowed to do that");
    }
  });
};

module.exports = { verifyToken, verifyTokenandAdmin,verifyTokenandAuthorization };
