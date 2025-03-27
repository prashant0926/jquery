
$(document).ready(function() {
    $("#sum").click(function() {
        let num1 = parseFloat($("#num1").val()) || 0;
        let num2 = parseFloat($("#num2").val()) || 0;
        $("#result").text(num1 + num2);
    });

    $("#subtract").click(function() {
        let num1 = parseFloat($("#num1").val()) || 0;
        let num2 = parseFloat($("#num2").val()) || 0;
        $("#result").text(num1 - num2);
    });
});
