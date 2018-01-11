$(document).ready(function() {
  $("#order-form").submit(function(event) {
    var shoeSizeInput = $("#shoe-size").val();
    var shoeQuantityInput = parseInt($("input#shoe-quantity").val());
    var noseQuantityInput = parseInt($("input#nose-quantity").val());
    var wigInput = $("#wig").val();
    var wigQuantityInput = parseInt($("input#wig-quantity").val());

    $(".shoe-size").text(shoeSizeInput);
    $(".shoe-quantity").text(shoeQuantityInput);
    $(".nose-quantity").text(noseQuantityInput);
    $(".wig").text(wigInput);
    $(".wig-quantity").text(wigQuantityInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
