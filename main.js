//window.onload = function(){ alert("test") }

var main = function () {
    $("#addBtn").click(function () {
        var value = $('#addInput').val();
        var $li = $("<li/>").text(value)
        $li.click(function (event) {
            $(event.target).remove();
        });
        // $li.text(value)
        $("#list").append($li);
        $('#addInput').val('')
    });
}

$("document").ready(main)