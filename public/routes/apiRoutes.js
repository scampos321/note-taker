const router = require("express").Router();

router.get("/notes", (req, res) => {
    res.send("Hello World!");
});

module.exports = router;