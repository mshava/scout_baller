CREATE DATABASE players;
CREATE USER admin@localhost IDENTIFIED BY 'myseedapp';
GRANT ALL PRIVILEGES ON the_hub.* TO admin@localhost;
FLUSH PRIVILEGES;

drop table if exists goal_Keepers;
drop table if exists defenders;
drop table if exists midfielders;
drop table if exists strikers;


CREATE TABLE players (
  id int not null auto_increment primary key,
  name varchar (100) not null,
  age varchar (100) not null,
	gender varchar (100) not null,
	position varchar (100) not null,
	team varchar (100) not null,
	matches varchar (100) not null,
	matches_won int (11) not null,
	matches_lost int (11) not null,
	league_titles varchar (100) not null,
	tonaments varchar (100) not null,
  address varchar (100) not null
);

CREATE TABLE goal_Keepers (
  id int not null auto_increment primary key,
  players_id int not null,
  goals_saved int (11) not null,
  goal_considered int (11) not null
);


CREATE TABLE midfielders (
  id int not null auto_increment primary key,
  name varchar (100) not null,
  age varchar (100) not null,
	position varchar (100) not null,
	team varchar (100) not null,
  address varchar (100) not null
);


/*
CREATE TABLE user (
  id int not null auto_increment primary key,
  email varchar (100) not null,
  entity_id int not null,
  role varchar (100) not null,
  status varchar (100) not null,
  password varchar (100) not null,
  firstName varchar (100) not null,
  lastName varchar (100) not null,
  foreign key (entity_id) references entity(id)
);

CREATE TABLE questionnaire (
  id int not null auto_increment primary key,
  entity_id int not null,
  name varchar (100) not null,
  dueDate date not null,
  parent_questionnaire_id int,
  foreign key (entity_id) references entity(id)
);

CREATE TABLE questionnaire_user (
  questionnaire_id int not null,
  user_id int not null,
  status varchar (100) not null,
  foreign key (questionnaire_id) references questionnaire(id),
  foreign key (user_id) references user(id)
);

CREATE TABLE password_reset (
  token varchar (100) not null,
  timestamp date not null,
  user_id int not null,
  foreign key (user_id) references user(id)
);

CREATE TABLE metric(
  id int not null auto_increment primary key,
  title varchar (100) not null,
  description varchar (100) not null,
  entity_id int not null,
  foreign key (entity_id) references entity(id)
);

CREATE TABLE response_data(
  id int not null auto_increment primary key,
  value varchar (100) not null,
  timestamp date not null,
  questionnaire_id int not null,
  metric_id int not null,
  foreign key (questionnaire_id) references questionnaire(id),
  foreign key (metric_id) references metric(id)
);

CREATE TABLE questionnaire_metric(
  questionnaire_id int not null,
  metric_id int not null,
  foreign key(questionnaire_id) references questionnaire(id),
  foreign key(metric_id) references metric(id)
);
*/
