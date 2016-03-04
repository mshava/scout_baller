const QueryService = require("../data_services/query-service");

module.exports = function(connection) {
  const queryService = new QueryService(connection);
  this.showPlayers = function() {
    return queryService.executeQuery('SELECT * FROM players');

  };

};
