const QueryService = require('../data_services/query-service');

module.exports = function (connection) {
  const queryService = new QueryService(connection);
    this.addPlayers = function(data) {
      return queryService.executeQuery('INSERT INTO players set ?', data);

    };

    this.seePlayers = function() {
      return queryService.executeQuery('SELECT * FROM players');

    };
};
