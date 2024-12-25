import mongoose, { Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const jobSchema = new Schema(
  {
    title: {
        type: String,
      },
      company: {
        type: String,
      },
      location: {
        type: String,
      },
      job_link: {
        type: String,
      },
      seniority_level: {
        type: String,
      },
      employment_type: {
        type: String,
      },
      source: {
        type: String,
      },
      experience: {
        type: String,
      },
      company_url: {
        type: String,
      },
      companyImageUrl: {
        type: String,
      },
      postedDateTime: {
        type: Date,
      },
      min_exp: {
        type: Number,
      },
      max_exp: {
        type: Number,
      },
      country: {
        type: String,
      },
      companytype: {
        type: String,
      },
  },
  { timestamps: true }
);

jobSchema.plugin(mongoosePaginate);
jobSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("jobs", jobSchema);