const courseService = require('../services/courseService');



const getAllCourse = async(req, res) => {
  try {
    res.json(await courseService.getAllCourse());
  } catch (e) { res.status(500).json({ error: e.message }); }
};


const getCourseById = async(req, res) => {
  try {
    const course = await courseService.getCourseById(req.params.id); //filtre les datas par id via fontion getCourseById
    course ? res.json(course) : res.status(404).json({ error: 'Non trouvée' }); //test de la reponse json
  } catch (e) { res.status(500).json({ error: e.message }); } //erreur interne
};

const getByLevel = async (req, res) => {
  try {
    const { level } = req.params; // "débutant"
    
    const courses = await Course.findAll({
      where: { 
        level,  //
        published: true 
      },
      include: [{
        model: Category,
        attributes: ['id', 'name']
      }],
      order: [['title', 'ASC']] // Bonus
    });
    
    res.json({
      count: courses.length,
      level,
      data: courses
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCourse = async (req, res) => {  // async ajouté
  try {
   
    const course = await courseService.createCourse(req.body);  // await !
    res.status(201).json(course);
  } catch(e) { res.status(500).json({ error: e.message }); }
};


const updateCourse = async (req, res) => {  // async ajouté
  try {
    const course = await courseService.updateCourse(req.params.id, req.body);  // await !
    course ? res.json(course) : res.status(404).json({ error: 'Non trouvée' });
  } catch(e) { res.status(500).json({ error: e.message }); }
};


const deleteCourse= async (req, res) => {  // async ajouté
  try {
    const deleted = await courseService.deleteCourse(req.params.id);  // await !
    deleted
      ? res.json({ message: 'Supprimée' })
      : res.status(404).json({ error: 'Non trouvée' });
  } catch(e) { res.status(500).json({ error: e.message }); }
};


module.exports = { getAllCourse: getAllCourse, getByLevel, getCourseById, createCourse, updateCourse, deleteCourse}