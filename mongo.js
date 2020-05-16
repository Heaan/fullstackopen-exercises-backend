const mongoose = require("mongoose");

if (process.argv.length < 5) {
  console.log("give password & name & number as argument");
  process.exit(1);
}
const password = process.argv[2];
const url = `mongodb+srv://Heaan:${password}@cluster0-o2j19.mongodb.net/phonebook?retryWrites=true&w=majority`;

const name = process.argv[3];
const number = process.argv[4];

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: name,
  number: number,
});

person
  .save()
  .then((result) => {
    console.log(
      `added ${result.name} number ${result.number} to the phonebook`
    );
  })
  .then(() => {
    Person.find({}).then((result) => {
      console.log("phonebook:");
      result.forEach((person) => {
        console.log(`${person.name} ${person.number}`);
      });
      mongoose.connection.close();
    });
  })
  .catch((err) => {
    console.log("something wrong");
    console.error(err);
    mongoose.connection.close();
  });
