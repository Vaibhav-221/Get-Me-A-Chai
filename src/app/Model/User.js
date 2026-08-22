import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }, username:{
    type: String,
  
    unique: true
  }, profilepic: {
    type: String,

  }, coverpic: {
    type: String,
  },
    createdAt: {
    type: Date,
    default: Date.now
  }, updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.User || model("User", userSchema);;