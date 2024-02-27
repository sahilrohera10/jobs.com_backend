const validateRole = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (userRole === requiredRole) {
      next();
    } else {
      res
        .status(403)
        .json({ error: "Forbidden", message: "Insufficient permissions" });
    }
  };
};

module.exports = validateRole;
