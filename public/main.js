var main = function () {
    $("#addBtn").click(function () {
        var value = $('#addInput').val();
        var $li = $("<li/>");
        var $span = $("<span/>")
        
        $span.text(value);
        var $checkbox = $("<input/>").attr("type","checkbox");
        $li.append($checkbox);
        $li.append($span);

        $checkbox.click(function(event){
            var valueTextDecoration = $span.css("text-decoration");
            if(valueTextDecoration.indexOf("line-through") !== -1){
                $span.css("text-decoration","none")
            }else{
                $span.css({"text-decoration":"line-through"})
            }
        })

        $("#list").append($li);
        $('#addInput').val('')
    });
}

$("document").ready(main)