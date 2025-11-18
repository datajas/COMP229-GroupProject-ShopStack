import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization? req.headers.authorization.split(" ")[1] : null;

    if(!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"});
    }
}

// Role-based access control middleware
export const isAdmin = (req, res, next) => {
    if (decoded.role== 'admin')  {
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Admins only" });
    }
};

export const isCustomer = (req, res, next) => {
    if (decoded.role== 'customer')  {
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Customers only" });
    }
};

export default authMiddleware;