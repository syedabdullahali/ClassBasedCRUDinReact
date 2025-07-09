"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middaleWare = async (req, res, next) => {
    try {
        if (req.headers.authorization === "Test Token") {
            next();
        }
        else {
            res.status(403).json({ message: "Access denied" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error, message: "Something went wrong...." });
    }
};
module.exports = { middaleWare };
