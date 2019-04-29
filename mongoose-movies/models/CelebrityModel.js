const mongoose = require('mongoose');

const celebritySchema = require('../schemas/CelebritySchemas');
const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;