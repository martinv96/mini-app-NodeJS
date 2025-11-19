// routes/notes.js
const express = require('express');
const router = express.Router();
const { readNotes, writeNotes } = require('../utils/fileUtils');
const path = require('path');


// GET /notes → liste complète
router.get('/', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// GET /notes/html → envoie la page HTML
router.get('/html', (req, res) => {
  const filePath = path.join(__dirname, '..', 'views', 'notes.html');
  res.sendFile(filePath);
});


// POST /notes → ajoute une note
router.post('/', (req, res) => {
  const { text } = req.body;
  let notes = readNotes();

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Le texte ne peut pas être vide' });
  }

  const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
  const note = { id, text };

  notes.push(note);
  writeNotes(notes);

  res.status(201).json(note);
});

// GET /notes/:id
router.get('/:id', (req, res) => {
  const notes = readNotes();
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'pas de note trouvée' });
  }

  res.json(note);
});

// PUT /notes/:id
router.put('/:id', (req, res) => {
  const { text } = req.body;
  const id = parseInt(req.params.id);
  let notes = readNotes();

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'pas de note trouvée' });
  }

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Le texte ne peut pas être vide' });
  }

  note.text = text;
  writeNotes(notes);

  res.json(note);
});

// DELETE /notes/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let notes = readNotes();

  const index = notes.findIndex(n => n.id === id);

  if (index < 0) {
    return res.status(404).json({ error: 'pas de note trouvée' });
  }

  const deleted = notes.splice(index, 1);
  writeNotes(notes);

  res.json(deleted[0]);
});

module.exports = router;
