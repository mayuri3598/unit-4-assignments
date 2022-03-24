const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    mark: { type: String, required: true },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("submission", submissionSchema);
