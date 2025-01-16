// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/", async (req, res, next) => {
  Project.getAll()
    .then((data) => {
      res.json({ data, message: "Project Router" });
    })
    .catch(next);
});

module.exports = router;
