const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

console.log("connecting to the MongoDB");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to the MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to the MongoDB: ", error);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

personSchema.set("toJSON", {
  transform: (document, reObj) => {
    reObj.id = reObj._id.toString();
    delete reObj._id;
    delete reObj.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
