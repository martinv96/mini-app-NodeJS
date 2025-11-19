# Mini-App - API de Gestion de Notes

API RESTful simple pour gérer des notes avec interface web.

## Installation

```bash
npm install
```

## Démarrage

```bash
npm start
```

Serveur disponible sur `http://localhost:3000`

## Scripts

- `npm start` : Démarre le serveur
- `npm test` : Lance les tests

## Configuration

Créer un fichier `.env` pour personnaliser le port :
```
PORT=4000
```

## Interface Web

Ouvrez `http://localhost:3000/notes/html` dans votre navigateur pour gérer vos notes (ajouter, voir, supprimer).

## API Routes

### Routes générales
- `GET /` : Message de bienvenue
- `GET /status` : Statut du service

### Routes des notes
- `GET /notes` : Liste toutes les notes
- `GET /notes/:id` : Récupère une note par ID
- `POST /notes` : Crée une note (body: `{"text": "..."}`)
- `PUT /notes/:id` : Modifie une note (body: `{"text": "..."}`)
- `DELETE /notes/:id` : Supprime une note
- `GET /notes/html` : Interface web

## Exemples curl (envoie de requêtes HTTP pures à l'API sans framework)

**Lister les notes**
```bash
curl http://localhost:3000/notes
```

**Créer une note**
```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d "{\"text\":\"Ma note\"}"
```

**Supprimer une note**
```bash
curl -X DELETE http://localhost:3000/notes/1
```

Plus d'exemples dans [POSTMAN_TESTS.md](./POSTMAN_TESTS.md)

## Structure

```
mini-app/
├── data/notes.json         # Données
├── routes/notes.js         # Routes API
├── utils/fileUtils.js      # Lecture/écriture fichier
├── views/
│   ├── notes.html          # Interface web
│   └── style.css           # Styles
├── server.js               # Serveur
├── notes.test.js           # Tests
└── package.json
```

## Technologies

- Node.js + Express
- Jest + Supertest
- Stockage JSON

## Fonctionnalités

- ✅ CRUD complet
- ✅ Interface web interactive
- ✅ Tests automatisés
- ✅ Validation des données
- ✅ Gestion des erreurs

---

Projet réalisé dans le cadre de la formation CDA
