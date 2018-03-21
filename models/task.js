/**
 * Created by yc5424tl on 3/20/2018.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
  text: String,
  completed: Boolean
});

let Task = mongoose.model('Task', taskSchema);





module.exports = Task;