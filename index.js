const express = require("express");
const app = express();
const morgan = require("morgan");

morgan.token("request-body", (req) => JSON.stringify(req.body));

const loggerFormat = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
    tokens["request-body"](req, res),
  ].join(" ");
};

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "Tom Max",
    number: "123-223434",
    id: 5,
  },
  {
    name: "Jerry Love",
    number: "234-234234",
    id: 6,
  },
];

app.use(express.json());
app.use(morgan(loggerFormat));

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(`<div>Phonebook has info for ${persons.length} people</div>
<div>${new Date().toString()}<div>`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);
  person ? res.json(person) : res.status(404).end();
});

app.delete("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number missing",
    });
  }
  if (persons.find((person) => person.name === body.name)) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }
  const id = Math.floor(Math.random() * 100 + 7);
  const person = {
    name: body.name,
    number: body.number,
    id: id,
  };
  persons = persons.concat(person);
  res.status(201).json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
