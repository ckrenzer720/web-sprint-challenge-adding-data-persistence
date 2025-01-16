// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res, next) => {
  Task.getAll()
    .then((data) => {
      res.json({ data, message: "Task Router" });
    })
    .catch(next);
});

module.exports = router;
