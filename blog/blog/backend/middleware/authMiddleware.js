// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   console.log("🔐 Raw auth header:", `"${authHeader}"`);

//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     const token = authHeader.split(" ")[1];
//     console.log("🔑 Extracted token:", token);
//     console.log("🧾 JWT_SECRET from .env:", process.env.JWT_SECRET);

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = { _id: decoded.id };
//       console.log("✅ Decoded JWT:", decoded);
//       next();
//     } catch (err) {
//       console.error("❌ JWT verification error:", err.message);
//       return res.status(401).json({ message: "Invalid token" });
//     }
//   } else {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("🔐 Raw auth header:", `"${authHeader}"`);

  if (authHeader && authHeader.toLowerCase().startsWith("bearer")) {
    // This line removes extra spaces or line breaks after "Bearer"
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();
    console.log("🔑 Extracted token:", `"${token}"`);
    console.log("🧾 JWT_SECRET from .env:", process.env.JWT_SECRET);

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { _id: decoded.id };
      console.log("✅ Decoded JWT:", decoded);
      next();
    } catch (err) {
      console.error("❌ JWT verification error:", err.message);
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};

export default authMiddleware;
