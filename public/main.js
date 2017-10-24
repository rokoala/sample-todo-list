//TODO persist data
var load = function () {
    $.get("api/tasks", function (data) {
        console.log(data);
        data.forEach(function(element) {
            addTask(element.name, element.done);
        });
    });
}

var addTask = function(name, done){
    var value = name;
    //TODO Check if name is empty
    var $li = $("<li/>");
    var $span = $("<span/>")

    $span.text(value);
    var $checkbox = $("<input/>").attr("type", "checkbox");
    $li.append($checkbox);
    $li.append($span);

    if(done){
        $span.css({ "text-decoration": "line-through" })
        $checkbox.attr("checked","true");
    }

    $checkbox.click(function (event) {
        var valueTextDecoration = $span.css("text-decoration");
        if (valueTextDecoration.indexOf("line-through") !== -1) {
            $span.css("text-decoration", "none")
        } else {
            $span.css({ "text-decoration": "line-through" })
        }
    })

    $("#list").append($li);
    $('#addInput').val('')
}

var main = function () {

    load();

    $("#addBtn").click(function () {
        addTask($('#addInput').val(), false);
    });
}

$("document").ready(main)