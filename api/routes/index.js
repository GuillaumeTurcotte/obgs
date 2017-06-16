const gameRoutes = require('./game_routes');

module.exports = function(app, db) {
  gameRoutes(app, db);
  // Other route groups could go here, in the future
};