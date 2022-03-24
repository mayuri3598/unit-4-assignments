const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollno: { type: Number, required: true, unique: true },
    currentBatch: { type: String, required: true },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("student", studentSchema);
