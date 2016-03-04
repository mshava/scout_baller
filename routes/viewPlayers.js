exports.show = function(req, res, next) {
  req.getServices()
    .then(function(services) {
      const viewPlayersDataservice = services.viewPlayersDataservice;
      console.log(services);
      const id = req.params.id;
        viewPlayersDataservice.showPlayers()
          .then(function(players) {
              res.render('view-Players', {
                players : players
              });
          });
        })
    .catch(function(err) {
      next(err);
    });

};
