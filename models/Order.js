import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    items: [
      {
        id: Number,
        name: String,
        image: String,
        price: Number,
        qty: Number,
      },
    ],

    address: {
      name: String,
      phone: String,
      address: String,
      city: String,
      pin: String,
    },

    totalAmount: Number,

    status: {
      type: String,
      default: "Pending", // Pending, Shipped, Delivered, Cancelled
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
