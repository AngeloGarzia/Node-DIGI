let tasks = []; // tableau pour gerer les datas
const nextId = () => Math.max(...tasks.map(t => t.id), 0) + 1; //recherche le plus grand id et l'increment

const getAllTasks = () => tasks; //return les datas dans tasks

const getTaskById = (id) => tasks.find(t => t.id === parseInt(id)); // parse string en int puis requette sur id

const createTask = (data) => {  //construction du body
  const task = {
    id: nextId(),
    titre: data.titre,
    description: data.description || '',
    date_debut: data.date_debut || null,
    date_fin: data.date_fin || null,
    done: Boolean(data.done)
  };
  tasks.push(task);
  return task;
};

const updateTask = (id, data) => {
  const index = tasks.findIndex(t => t.id === parseInt(id));  //recherche par l'id
  if (index === -1) return null; //non trouvé
  tasks[index] = { ...tasks[index], ...data }; //mise a jours des datas
  return tasks[index];
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };