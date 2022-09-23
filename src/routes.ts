import Express from "express";
const router = Express.Router();

router.get("/", (req, res) => {
  const { name = "World" } = req.query;
  return res.send(`Hello ${name}!`);
});

router.get("/pitches", (req, res) => {
  const { name = "pitches" } = req.query;
  return res.send(`Hello ${name}!`);
});

router.get("/players", (req, res) => {
  const { name = "players" } = req.query;
  return res.send(`Hello ${name}!`);
});

export { router };
