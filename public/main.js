//TODO persist data
var load = function () {
    $.get("api/tasks", function (data) {
        console.log(data);
        data.forEach(function(element) {
            addTask(element._id, element.name, element.done);
        });
    });
}

var editTask = function(id, name, done){
    //atualiza o status done no banco
    // $.post("api/uptask", {id:id, done:done});
    $.ajax({
        url: "api/uptask",
        type: 'PUT',
        data: {
          id:id,
          done:done,
        },
    });
}

var addTaskDB = function(name) {
    if(name == ""){
        return false;
    }
    //insere a task no banco
    $.post("api/task", {name:name}, function (data) {
        addTask(data._id, data.name, data.done);
    });
}

var addTask = function(id, name, done){
    var value = name;
    var $li = $("<li/>");
    var $span = $("<span/>")

    $span.text(value);
    var $checkbox = $("<input/>").attr("type", "checkbox");
    $li.append($checkbox);
    $li.append($span);

    if(done){
        $span.css({ "text-decoration": "line-through" });
        $checkbox.attr("checked","true");
    }

    $checkbox.click(function (event) {
        var valueTextDecoration = $span.css("text-decoration");
        if (valueTextDecoration.indexOf("line-through") !== -1) {
            $span.css("text-decoration", "none");
            editTask(id, name, false);
        } else {
            $span.css({ "text-decoration": "line-through" });
            editTask(id, name, true);
        }
    })

    $("#list").append($li);
    $('#addInput').val('')
}

var main = function () {

    load();

    $("#addBtn").click(function () {
        addTaskDB($('#addInput').val());
    });
}

$("document").ready(main)