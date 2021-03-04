function Tasks(task, nature, sDate, eDate) {
    this.taskName = task;
    this.nature = nature;
    this.startDate = sDate;
    this.endDate = eDate;
}
//user logic
$(document).ready(function() {
    $("form#myForm").submit(function(event) {
        event.preventDefault();
        var inputtedTaskName = $("input#taskName").val();
        var inputtedNature = $("#nature option:selected").val();
        var inputtedStartDate = $("input#startDate").val();
        var inputtedEndDate = $("input#endDate").val();

        var newTask = new Tasks(inputtedTaskName, inputtedNature, inputtedStartDate, inputtedEndDate);
        $("ol#taskList").append("<li><span class='taskNames'>" + newTask.taskName + "</span></li>");

        $("input#taskName").val("");
        $("#nature option:selected").val("");
        $("input#startDate").val("");
        $("input#endDate").val("");
        $(".taskNames").last().click(function() {
            $("#show-task").show();
            $(".task-name").text(newTask.taskName);
            $(".task-nature").text(newTask.nature);
            $(".start-date").text(newTask.startDate);
            $(".end-date").text(newTask.endDate);
        });
    });

});