const connectToDB = require("../config/database");

const getNotes = (req, res) => {
  const SELECT_NOTES_QUERY = "SELECT * FROM notes";
  connectToDB.query(SELECT_NOTES_QUERY, (error, results) => {
    if (error) {
      console.error("Error fetching notes:", error);
      res.status(500).json({ error: "Error fetching notes" });
    } else {
      res.status(200).json(results);
    }
  });
};

const addNewNotes = (req, res) => {
  const { title, content } = req.body;
  const INSERT_NOTE_QUERY = "INSERT INTO notes (title, content) VALUES (?, ?)";
  connectToDB.query(INSERT_NOTE_QUERY, [title, content], (error, result) => {
    if (error) {
      console.error("Error adding note:", error);
      res.status(500).json({ error: "Error adding note" });
    } else {
      const newNote = { id: result.insertId, title, content };
      res.status(201).json(newNote);
    }
  });
};

const deleteNotes = (req, res) => {
  const { id } = req.params;
  const DELETE_NOTE_QUERY = "DELETE FROM notes WHERE id = ?";
  connectToDB.query(DELETE_NOTE_QUERY, [id], (error) => {
    if (error) {
      console.error("Error deleting note:", error);
      res.status(500).json({ error: "Error deleting note" });
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = { getNotes, addNewNotes, deleteNotes };
