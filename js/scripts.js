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
        var inputtedNature = $("select#nature").val();
        var inputtedStartDate = $("input#startDate").val();
        var inputtedEndDate = $("input#endDate").val();

        var newTask = new Tasks(inputtedTaskName, inputtedNature, inputtedStartDate, inputtedEndDate);
        $("ol#tasklist").append("<li>" + newTask.taskName + "</li>");

        $("input#taskName").val("");
        $("input#nature").val("");
        $("input#startDate").val("");
        $("input#endDate").val("");
    });

});