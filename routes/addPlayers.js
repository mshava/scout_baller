exports.show = function (req, res, next) {
  var players_id = req.params.id;
    req.getServices()
        .then(function(services){
            const addPlayersDataService = services.addPlayersDataService;
            addPlayersDataService.seePlayers()
            .then(function(players){
                    res.render('add-Players', {
                        players : players
                    });
            });
        })
          .catch(function(err){
                next(err);
          });
};


exports.add = function(req, res, next) {
  var players_id = req.params.id;
    req.getServices()
        .then(function(services) {
            var data = {
                name : req.body.name,
                age : req.body.age,
                gender : req.body.gender,
                position : req.body.position,
                team : req.body.team,
                matches : req.body.matches,
                matches_won : req.body.matches_won,
                matches_lost : req.body.matches_lost,
                league_titles :req.body.league_titles,
                tonaments : req.body.tonaments,
                address : req.body.address
            };
            const addPlayersDataService = services.addPlayersDataService;
              addPlayersDataService.addPlayers(data)
                .then(function(results) {
                  res.render('add-Players')
                });
            })
              .catch(function(err){
                next(err);
              });
};
/*
exports.addMetricToMetricTable = function (req, res, next) {
  var questionnaire_id = req.params.id;
    req.getServices()
        .then(function(services){
            var data = {
                title : req.body.title,
                description : req.body.description,
                entity_id : req.session.entity_id
            };
            const setupQuestionnaireDataService = services.setupQuestionnaireDataService;
            setupQuestionnaireDataService.addMetricToMetricTable(data)
                .then(function(results){
                    res.redirect('/questionnaire/setup/step2/' + questionnaire_id);
                });
        })
          .catch(function(err){
            next(err);
          });
};
*/
