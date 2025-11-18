# Guide de test avec Postman - Mini-App API

## Configuration

**URL de base :** `http://localhost:3000`

## Collection de tests Postman

### 1. Vérifier le statut du serveur

**Méthode :** GET  
**URL :** `http://localhost:3000/status`  
**Headers :** Aucun

**Réponse attendue (200 OK) :**
```json
{
  "service": "mini-app",
  "status": "running"
}
```

---

### 2. Récupérer toutes les notes

**Méthode :** GET  
**URL :** `http://localhost:3000/notes`  
**Headers :** Aucun

**Réponse attendue (200 OK) :**
```json
[
  {
    "id": 1,
    "text": "Exemple de note"
  }
]
```

---

### 3. Créer une nouvelle note

**Méthode :** POST  
**URL :** `http://localhost:3000/notes`  
**Headers :**
- `Content-Type: application/json`

**Body (raw JSON) :**
```json
{
  "text": "Ma nouvelle note créée avec Postman"
}
```

**Réponse attendue (201 Created) :**
```json
{
  "id": 2,
  "text": "Ma nouvelle note créée avec Postman"
}
```

---

### 4. Récupérer une note spécifique

**Méthode :** GET  
**URL :** `http://localhost:3000/notes/1`  
**Headers :** Aucun

**Réponse attendue (200 OK) :**
```json
{
  "id": 1,
  "text": "Exemple de note"
}
```

---

### 5. Modifier une note

**Méthode :** PUT  
**URL :** `http://localhost:3000/notes/1`  
**Headers :**
- `Content-Type: application/json`

**Body (raw JSON) :**
```json
{
  "text": "Note modifiée avec Postman"
}
```

**Réponse attendue (200 OK) :**
```json
{
  "id": 1,
  "text": "Note modifiée avec Postman"
}
```

---

### 6. Supprimer une note

**Méthode :** DELETE  
**URL :** `http://localhost:3000/notes/1`  
**Headers :** Aucun

**Réponse attendue (200 OK) :**
```json
{
  "id": 1,
  "text": "Note modifiée avec Postman"
}
```

---

### 7. Tester les erreurs

#### Note inexistante
**Méthode :** GET  
**URL :** `http://localhost:3000/notes/99999`

**Réponse attendue (404 Not Found) :**
```json
{
  "error": "pas de note trouvée"
}
```

#### Texte vide
**Méthode :** POST  
**URL :** `http://localhost:3000/notes`  
**Headers :**
- `Content-Type: application/json`

**Body (raw JSON) :**
```json
{
  "text": ""
}
```

**Réponse attendue (400 Bad Request) :**
```json
{
  "error": "Le texte ne peut pas être vide"
}
```

---

## Scénario de test complet

1. **Vérifier le statut** → GET /status
2. **Lister les notes** → GET /notes
3. **Créer 3 notes** → POST /notes (répéter 3 fois avec différents textes)
4. **Récupérer une note** → GET /notes/2
5. **Modifier une note** → PUT /notes/2
6. **Supprimer une note** → DELETE /notes/1
7. **Vérifier la liste finale** → GET /notes

---

## Configuration du port

Pour tester avec un port différent, définissez la variable d'environnement avant de démarrer :

**Windows (PowerShell) :**
```powershell
$env:PORT=4000; npm start
```

**Linux/Mac :**
```bash
PORT=4000 npm start
```

Ensuite, utilisez `http://localhost:4000` dans Postman.

---

## Import dans Postman

Vous pouvez créer une collection Postman avec toutes ces requêtes pour faciliter les tests répétés.

### Variables d'environnement Postman suggérées :
- `base_url` : `http://localhost:3000`
- `note_id` : ID dynamique à mettre à jour après création

Utilisez `{{base_url}}` dans vos requêtes pour faciliter le changement de port.
