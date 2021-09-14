const router = require("express").Router();
const fs = require("fs");
const uuid = require("uuid");

router.get("/notes", (req, res) => {
    const noteData = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(noteData));
})

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const createNote = req.body;
    createNote.id = uuid.v4();
    notes.push(createNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
})

router.delete("/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const deleteNote = notes.filter((ersNote) => ersNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    res.json(deleteNote);
})

module.exports = router;