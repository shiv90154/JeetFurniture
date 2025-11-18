import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(
      "mongodb+srv://shivwork2006_db_user:bG2kyoVzCQdRe9Bm@cluster0.6oihmhl.mongodb.net/furnistore"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};
