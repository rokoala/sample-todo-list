const db = require('monk')('localhost/test')

const tasks = db.get('tasks');

var api = {
    getTasks() {
        return tasks.find({});
    },
    addTask(name) {
        return tasks.insert({ name: name, done: false });
    },
    editTask(id, done) {
        var _done = (done === "true") ? true : false;
        return tasks.update({ _id: id }, { $set: { done: _done } });
    }
}

module.exports = api;