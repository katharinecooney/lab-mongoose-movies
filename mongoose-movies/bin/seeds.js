const mongoose = require('mongoose');

const Celebrity = require('../models/CelebrityModel');
const dbName = "movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Katy",
    occupation: "Acrobat",
    catchPhrase: "Stay away from me!",
  }, 
  {
    name: "Dino",
    occupation: "Astronaut",
    catchPhrase: "To infinitie and beyond",
  }, 
  {
    name: "Ivy",
    occupation: "Action Actress",
    catchPhrase: "Let's move!",
  }
];

Celebrity.create(celebrities, (err) => {
  if(err) {throw (err)}
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});