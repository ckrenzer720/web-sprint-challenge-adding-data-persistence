// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");

router.get("/", async (req, res, next) => {
  Resource.getAll()
    .then((data) => {
      res.json({ data, message: "Resource Router" });
    })
    .catch(next);
});

module.exports = router;
