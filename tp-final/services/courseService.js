const Course = require('../models/course');

const courseService = {
    getAllCourse: async () => {
        return await Course.findAll();
    },

    getCourseById: async (id) => {
        return await Course.findByPk(id);
    },

    createCourse: async (data) => {
        console.log("toto2")
        return await Course.create(data);
    },

    updateCourse: async (id, data) => {
        const course = await Course.findByPk(id);
        if (course) {
            return await course.update(data);
        }
        return null;
    },

    deleteCourse: async (id) => {
        const course = await Course.findByPk(id);
        if (course) {
            await course.destroy();
            return course;
        }
        return null;
    }
};

module.exports = courseService;
