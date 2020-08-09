$(document).ready(function() {
    $(".eat-btn").on("click", function (event) {
        $.ajax(`/api/burgers/${this.id}`, {
            type: "PUT"
        }).then(function() {
            location.reload();
        });
    });
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        let newBurger = {burger_name: $("#burger-name").val().trim()};
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });
});