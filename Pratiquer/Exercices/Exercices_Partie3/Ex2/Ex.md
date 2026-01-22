# Exercice : Authentification avec JWT (JSON Web Token)

L'objectif de cet exercice est de sécuriser votre API en mettant en place un système d'authentification robuste basé sur les tokens JWT et le hachage de mots de passe.

## Contexte
Reprenez l'API de gestion de tâches (incluant Sequelize et Express Validator). Vous devez maintenant ajouter une couche utilisateur et protéger l'accès aux données.

## Étape 1 : Installation
Installez les bibliothèques nécessaires pour la sécurité :
```bash
npm install jsonwebtoken bcrypt
```

## Étape 2 : Modèle Utilisateur
Créez un modèle **User** avec Sequelize :
- **email** : String, unique, obligatoire, validation de format email.
- **password** : String, obligatoire (stockera le mot de passe haché).

## Étape 3 : Inscription et Connexion
Implémentez les routes d'authentification (ex: dans `authRouter.js`) :

1.  **POST /register** : 
    - Validez les entrées (email valide, mot de passe de min 8 caractères).
    - Hachez le mot de passe avant de l'enregistrer en base avec **bcrypt**.
2.  **POST /login** :
    - Vérifiez si l'utilisateur existe.
    - Comparez le mot de passe fourni avec le hash en base de données.
    - Si correct, générez et renvoyez un **JWT** signé avec une clé secrète.

## Étape 4 : Middleware d'Authentification
Créez un middleware (ex: `authMiddleware.js`) qui :
- Récupère le token dans le header `Authorization` (format: `Bearer <TOKEN>`).
- Vérifie la validité du token.
- Ajoute les informations de l'utilisateur (`req.user`) à l'objet de requête pour les étapes suivantes.
- Renvoie une erreur **401 (Unauthorized)** ou **403 (Forbidden)** si le token est manquant ou invalide.

## Étape 5 : Protection des routes
Appliquez votre middleware pour protéger toutes les routes de gestion des **tâches** et des **listes**. 
Désormais, un utilisateur ne doit pas pouvoir consulter ou modifier de données sans être authentifié.

## Si vous avez terminé
Modifiez la base de données pour que chaque **Task** ou **List** soit liée à un **User**.
- Un utilisateur ne doit pouvoir récupérer, modifier ou supprimer **que ses propres données**.
- Lors de la création d'une tâche, celle-ci doit être automatiquement associée à l'ID de l'utilisateur extrait du token.