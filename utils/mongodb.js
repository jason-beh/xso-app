import mongoose from "mongoose";

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(
    process.env.VERCEL_GITHUB_COMMIT_REF === "staging"
      ? process.env.STAGING_MONGODB_URI
      : process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
}

export default dbConnect;
