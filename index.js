const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Person = require("./models/person");

morgan.token("request-body", (req) => JSON.stringify(req.body));

// const loggerFormat = (tokens, req, res) => {
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, "content-length"),
//     "-",
//     tokens["response-time"](req, res),
//     "ms",
//     tokens["request-body"](req, res),
//   ].join(" ");
// };

// let persons = [
//   {
//     name: "Arto Hellas",
//     number: "040-123456",
//     id: 1,
//   },
//   {
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//     id: 2,
//   },
//   {
//     name: "Dan Abramov",
//     number: "12-43-234345",
//     id: 3,
//   },
//   {
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//     id: 4,
//   },
//   {
//     name: "Tom Max",
//     number: "123-223434",
//     id: 5,
//   },
//   {
//     name: "Jerry Love",
//     number: "234-234234",
//     id: 6,
//   },
// ];

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :request-body"
  )
);

app.get("/api/persons", (req, res) => {
  Person.find({}).then((people) => {
    res.json(people.map((person) => person.toJSON()));
  });
});

app.get("/info", (req, res) => {
  Person.count({}).then((count) => {
    res.send(`<div>Phonebook has info for ${count} people</div>
  <div>${new Date().toString()}<div>`);
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  Person.findById(id)
    .then((person) => {
      person ? res.json(person.toJSON()) : res.status(404).end();
    })
    .catch((err) => next(err));
});

app.delete("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  Person.findByIdAndRemove(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => next(err));
});

app.put("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const newNumber = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(id, newNumber, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatePerson) => {
      updatePerson ? res.json(updatePerson.toJSON()) : res.status(404).end();
    })
    .catch((err) => next(err));
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number missing",
    });
  }
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person
    .save()
    .then((savedPerson) => {
      res.status(201).json(savedPerson.toJSON());
    })
    .catch((err) => next(err));
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.name === "CastError" && err.kind === "ObjectId") {
    res.status(400).send({ error: "malformatted id" });
  } else if (err.name === "ValidationError") {
    res.status(400).json({ error: err.message });
  }
  next(err);
};
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
