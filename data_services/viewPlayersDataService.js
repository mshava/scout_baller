const QueryService = require("../data_services/query-service");

module.exports = function(connection) {
  const queryService = new QueryService(connection);
  this.showPlayers = function(id) {
    return QueryService.executeQuery('SELECT * FROM players');

  }
}
