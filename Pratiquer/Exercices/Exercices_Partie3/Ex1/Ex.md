# Exercice : Validation des données avec Express Validator

L'objectif de cet exercice est de renforcer la robustesse de votre API en mettant en place une validation stricte des données entrantes. Nous allons utiliser la bibliothèque **express-validator**.

## Contexte
Reprenez l'exercice précédent (Gestion des tâches et des listes avec Sequelize). Vous devez maintenant ajouter des couches de validation sur vos routes de création et de mise à jour.

## Étape 1 : Installation
Installez le package nécessaire :
```bash
npm install express-validator
```

## Étape 2 : Mise en œuvre de la validation
Créez un middleware de validation pour les **Tâches** et les **Listes**. Vous devez valider à la fois le corps des requêtes (`body`) et les paramètres d'URL (`params`).

### 1. Validation des Tâches (Tasks)
Pour les routes `POST /tasks` et `PUT /tasks/:id`, appliquez les règles suivantes :
- **titre** : Obligatoire, doit être une chaîne de caractères d'au moins 3 caractères.
- **description** : Optionnel, doit être une chaîne de caractères si fourni.
- **date_debut** : Doit être une date valide (format ISO8601).
- **date_fin** : Doit être une date valide et être impérativement **après** la `date_debut`.
- **done** : Doit être un booléen.
- **id** (dans les routes avec params) : Doit être un entier numérique.

### 2. Validation des Listes (Lists)
Pour les routes liées aux listes :
- **nom** : Obligatoire, ne doit pas être vide, minimum 2 caractères.
- **description** : Optionnel, doit être une chaîne de caractères.

## Étape 3 : Gestion du retour d'erreur
Si les données ne sont pas conformes, votre API ne doit pas appeler le contrôleur. Elle doit immédiatement renvoyer :
- Un code de statut **400 (Bad Request)**.
- Un objet JSON contenant le détail des erreurs rencontrées (utilisez `validationResult` d'express-validator).

## Si vous avez terminé
Centralisez la logique de vérification du résultat de validation dans un middleware réutilisable (ex: `validate.js`) pour éviter de répéter le bloc `if (!errors.isEmpty())` dans chaque route ou contrôleur.