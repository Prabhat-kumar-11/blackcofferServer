const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    end_year: { type: String },
    intensity: { type: Number, required: true },
    sector: { type: String, required: true },
    topic: { type: String, required: true },
    insight: { type: String, required: true },
    url: { type: String, required: true },
    region: { type: String, required: true },
    start_year: { type: String },
    impact: { type: String },
    added: { type: String, required: true },
    published: { type: String, required: true },
    country: { type: String, required: true },
    relevance: { type: Number, required: true },
    pestle: { type: String, required: true },
    source: { type: String, required: true },
    title: { type: String, required: true },
    likelihood: { type: Number, required: true },
  },
  { versionKey: false }
);

const DataModel = mongoose.model("data", dataSchema);

module.exports = { DataModel };
