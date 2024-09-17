import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const todos = [{
  id: 1,
  title: "Todo 1",
  description: "This is todo 1",
  completed: false,
}, {
  id: 2,
  title: "Todo 2",
  description: "This is todo 2",
  completed: false,
}, {
  id: 3,
  title: "Todo 3",
  description: "This is todo 3",
  completed: false,
}, {
  id: 4,
  title: "Todo 4",
  description: "This is todo 4",
  completed: false,
}, {
  id: 5,
  title: "Todo 5",
  description: "This is todo 5",
  completed: false,
}];

app.get("/todo", (req, res) => {
  const todoId = parseInt(req.query.id);
  if (!isNaN(todoId)) {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
      return res.json({ todo });
    }
  }
  res.status(400).json({ error: "Invalid or missing 'id' parameter" });
});

app.get("/todos", (req, res) => {
  const randomTodos = todos.filter(() => Math.random() > 0.5);
  res.json({ todos: randomTodos });
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (!isNaN(a) && !isNaN(b)) {
    const sum = a + b;
    return res.send(sum.toString());
  }
  res.status(400).json({ error: "Invalid or missing 'a' or 'b' parameter" });
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    return res.json({ total, interest });
  }
  res.status(400).json({ error: "Invalid or missing 'principal', 'rate', or 'time' parameter" });
});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10)
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
