const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    discr: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    categorie: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postSchema);
