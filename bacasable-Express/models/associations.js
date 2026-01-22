const Computer = require('./computerModel');
const Park = require('./parkModel');

// Relation 1:N - Un Park peut avoir plusieurs Computers
Park.hasMany(Computer, {
    foreignKey: 'parkId',
    as: 'computers'
});

// Un Computer appartient à un Park
Computer.belongsTo(Park, {
    foreignKey: 'parkId',
    as: 'park'
});

module.exports = { Computer, Park };
