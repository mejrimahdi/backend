const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).send({ msg: 'Access denied: Admins only' });
    }
};

module.exports = isAdmin;
