Créer une API RESTful qui permet de gérer une liste de tâches. Les utilisateurs peuvent ajouter, mettre à jour, récupérer et supprimer des tâches à l'aide des méthodes HTTP GET, POST, PUT et DELETE.

Une tâche est composé de : titre string required, description string, date_debut : date, date_fin : date, done : boolean

Pour le moment, il s’agit simplement de tout faire dans le fichier index.js Également, aucune BDD n’est encore mise en place, on stockera donc nos tâches dans un tableau (non persistent) Aucun middleware n’est à mettre en place

# Prérequis : installation de express 

npm init -y
npm install express
Ajout du script npm run start dans package.json

# Etape 1 : Création du serveur

Créer un serveur HTTP dans un fichier index.js qui écoute sur le port 3000 et qui affiche "Hello World" dans la console.

# Etape 2 : Création du router 

Créer un fichier routes/taskRouter.js qui contiendra les routes pour les tâches. Le relier au fichier index.js qui est le point d'entrée de l'application.

Créer les routes suivantes (il faudra les relier au controleur dans le fichier controllers/taskController.js) :

- GET /tasks
- GET /tasks/:id
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

# Etape 3 : Création du controleur 

Créer un fichier controllers/taskController.js qui contiendra les fonctions pour gérer les tâches. Les fonctions devront être appelées par les routes créées dans le fichier routes/taskRouter.js.

Les fonctions devront être les suivantes :

- getAllTasks : Récupérer toutes les tâches
- getTaskById : Récupérer une tâche par son id
- createTask : Ajouter une tâche
- updateTask : Mettre à jour une tâche
- deleteTask : Supprimer une tâche

Chaque méthode du contrôleur ne gere que les erreurs et l'appel au service à créer dans l'étape 4

# Etape 4 : Création du service 

Créer un fichier services/taskService.js qui contiendra les fonctions pour gérer les tâches. Les fonctions devront être appelées par le controleur créé dans l'étape 3

Les fonctions devront être les suivantes :

- getAllTasks : Récupérer toutes les tâches
- getTaskById : Récupérer une tâche par son id
- createTask : Ajouter une tâche
- updateTask : Mettre à jour une tâche
- deleteTask : Supprimer une tâche

C'est dans le service que vous pouvez instancier pour le moment un tableau de tâches : on ne gère pas encore la base de données donc à chaque "lancement de serveur", les données seront perdues. 


# Bonus

Ajouter l'écriture dans un fichier pour que les données ne soient pas perdues à chaque "lancement de serveur". 
On simulera une base de données en utilisant un fichier JSON par exemple.