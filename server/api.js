const db = require('monk')('localhost/test')

const tasks = db.get('tasks');

var api = {
    getTasks(){
        return tasks.find({});
    }
}

module.exports = api;