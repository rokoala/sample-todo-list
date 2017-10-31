const db = require('monk')('localhost/test')

const tasks = db.get('tasks');

var api = {
    getTasks(){
        return tasks.find({});
    },
    addTask(name){
        return tasks.insert({name:name, done:false});
        //TODO: tratar erro
    }
}

module.exports = api;