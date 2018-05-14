const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    title: String,
    img: String,
    location: String,
    description: String
});

module.exports = mongoose.model('Activity', activitySchema);
