const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import du Router notes
const notesRouter = require('./routes/notes');

// Pour lire les JSON
app.use(express.json());

// Servir les fichiers statiques du dossier views
app.use(express.static('views'));

// Middleware pour logguer chaque requête
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
});

// -------------------------
// Routes de base
// -------------------------
app.get('/', (req, res) => {
  res.send('Bienvenue dans l’API !');
});

app.get('/status', (req, res) => {
  res.json({ service: "mini-app", status: "running" });
});

// -------------------------
// Utilisation du router notes
// -------------------------
app.use('/notes', notesRouter);

// -------------------------
// Middleware global d'erreur
// -------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue !' });
});

// Démarrage du serveur (seulement si ce n'est pas importé pour les tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

// Export de l'app pour les tests
module.exports = app;
