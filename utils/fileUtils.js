const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'notes.json');

// Lire les notes
function readNotes() {
  try {
    const json = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(json);
  } catch (err) {
    console.error("Erreur lecture notes.json :", err);
    return [];
  }
}

// Écrire les notes
function writeNotes(notes) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
  } catch (err) {
    console.error("Erreur écriture notes.json :", err);
  }
}

module.exports = { readNotes, writeNotes };
