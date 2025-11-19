const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'notes.json');

// Lire les notes
function readNotes() {
  try {
    const json = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(json);
  } catch (err) {
    console.error("erreur de lecture de notes.json :", err);
    return [];
  }
}

// Écrire les notes
function writeNotes(notes) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
  } catch (err) {
    console.error("erreur d'écriture de notes.json :", err);
  }
}

module.exports = { readNotes, writeNotes };

// Note: Ce fichier permet de lire et écrire des notes dans un fichier JSON, le fichier notes.json.
//       Il est utilisé dans les routes de l'API pour lire et écrire les notes.
//       Ca permet aussi la sauvegarde des notes. dans notes.js : writeNotes(notes);