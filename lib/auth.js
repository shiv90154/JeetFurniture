import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const verifyPassword = async (plain, hashed) => {
  return await bcrypt.compare(plain, hashed);
};

export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const decodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
};
