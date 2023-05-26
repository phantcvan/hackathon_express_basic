const express = require("express");
const router = express.Router();
const database = require("../utils/database");
const checkExistId = require("../middleware/checkExistId");
const validateData = require("../middleware/validateData");

router.get("/", async (req, res) => {
    try {
        // Sd database lấy về toàn bộ users
        let data = await database.execute("SELECT * FROM note_hackathon_2.tbl_note")
        let [notes] = data;
        // response về cho client
        res.status(200).json({
            notes,
        })
    } catch (error) {
        res.json({
            error,
        })
    }
})

router.get("/:id",checkExistId, async (req, res) => {
    try {
        let { id } = req.params
        // Sd database lấy về toàn bộ users
        let data = await database.execute(`SELECT * FROM note_hackathon_2.tbl_note WHERE Note_id=${id}`)
        let [findNote] = data;
        // response về cho client
        res.status(200).json({
            findNote,
        })
    } catch (error) {
        res.json({
            error,
        })
    }
})

router.post("/",validateData, async (req, res) => {
    try {
        const { Content } = req.body;
        const query = "INSERT INTO note_hackathon_2.tbl_note (Content) VALUES (?)";
        await database.execute(query, [Content]);

        res.status(200).json({ message: "Note added successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while adding the note" });
    }
});

router.delete("/:id",checkExistId, async (req, res) => {
    try {
        let { id } = req.params
        // Sd database lấy về toàn bộ users
        let data = await database.execute(`DELETE FROM note_hackathon_2.tbl_note WHERE Note_id=${id}`)
        let [newNote] = data;
        // response về cho client
        res.status(200).json({
            newNote,
        })
    } catch (error) {
        res.json({
            error,
        })
    }
})

module.exports = router;

