const express = require("express");
const router = express.Router();
const {
  getNotes,
  addNewNotes,
  deleteNotes,
} = require("../controller/notesController");

router.get("/getnotes", getNotes);
router.post("/addnotes", addNewNotes);
router.delete("/deletenotes/:id", deleteNotes);

module.exports = router;
