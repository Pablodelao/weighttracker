const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
 
  datee: {
    type: String,
    require: true,
  },

  weightNum:  {
    type: Number,
    require: true,

  },

  YesorNot: {
    type: String,
    require: true,

  },

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
