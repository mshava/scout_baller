exports.show = function(req, res, next) {
  req.getServices()
    .then(function(services) {
      const viewPlayersDataservices = services.viewPlayersDataservices;
        viewPlayersDataservices.showPlayers(players_id)
          .then(function(players) {
              res.render('viewPlayers', {
                players : players
              });
          });
        })
    .catch(function(err) {
      next(err);
    });

};
