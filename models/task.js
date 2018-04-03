
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
        text: String,
        completed: Boolean,
        dateCreated: Date,
        dateCompleted: Date
});

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;