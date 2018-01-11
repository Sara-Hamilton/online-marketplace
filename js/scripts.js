$(document).ready(function() {
  $("#order-form").submit(function(event) {
    var shoeSizeInput = $("#shoe-size").val();
    var shoeQuantityInput = parseInt($("input#shoe-quantity").val());
    var noseQuantityInput = parseInt($("input#nose-quantity").val());
    var wigInput = $("#wig").val();
    var wigQuantityInput = parseInt($("input#wig-quantity").val());
    var nameInput = $("#name").val();
    var addressInput = $("#address").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipInput = $("#zip").val();

    $(".shoe-size").text(shoeSizeInput);
    $(".shoe-quantity").text(shoeQuantityInput);
    $(".nose-quantity").text(noseQuantityInput);
    $(".wig").text(wigInput);
    $(".wig-quantity").text(wigQuantityInput);
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
