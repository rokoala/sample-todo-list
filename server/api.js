const db = require('monk')('localhost/test');

const tasks = db.get('tasks');

var api = {
    getTasks(){
        return tasks.find({});
    },
    addTask(name){
        return tasks.insert({name:name, done:false});
        //TODO: tratar erro
    },
    editTask(id, done){
        // Fiz esse tratamento tosco pq o update tava inserindo
        // 'false' e 'true' como strings no banco
        var _done = (done === 'true') ? true : false;
        return tasks.update({_id:id}, {$set:{done:_done}});
        //TODO: tratar erro
    },
}

module.exports = api;