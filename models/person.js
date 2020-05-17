const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
mongoose.set("useFindAndModify", false);
const url = process.env.MONGODB_URL;

console.log("connecting to the MongoDB");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to the MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to the MongoDB: ", error);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minlength: 3,
  },
  number: {
    type: String,
    validate: {
      validator: (num) => [...num].filter((n) => /\d/.test(n)).length >= 8,
    },
  },
});

personSchema.plugin(uniqueValidator);

personSchema.set("toJSON", {
  transform: (document, reObj) => {
    reObj.id = reObj._id.toString();
    delete reObj._id;
    delete reObj.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
