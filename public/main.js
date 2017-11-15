const API = new APPTODO.Api();

var load = function () {
    API.getTasks().then(function (data) {
        data.map(function (element) {
            addTask(element._id, element.name, element.done);
        });
    });
};

//TODO fix this...
var addTask = function (id, name, done) {
    var value = name;
    var $li = $("<li/>");
    var $span = $("<span/>");

    $span.text(value);
    var $checkbox = $("<input/>").attr("type", "checkbox");
    $li.append($checkbox);
    $li.append($span);

    if (done) {
        $span.css({ "text-decoration": "line-through" });
        $checkbox.attr("checked", "true");
    }

    $checkbox.click(function (event) {
        //TODO fix this...
        API.editTask(id, this.checked);

        if (this.checked)
            $span.css({ "text-decoration": "line-through" });
        else
            $span.css("text-decoration", "none");
    })

    $("#list").append($li);
    $('#addInput').val('');
};

var main = function () {

    load();

    $("#addBtn").click(function () {
        var name = $('#addInput').val();

        API.postTask(name).then(function (data) {
            addTask(data._id, data.name, data.done);
        });
    });
};

$("document").ready(main);