
function Order(size, crust, topping, quantity, delivery) {
  this.pizzaSize = size;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
  this.delivery = delivery;
}
Order.prototype.totalPrice = function(){
  var cartTotalprice = 0;
  for(var arrayElement = 0; arrayElement< totalPriceArray.length; arrayElement ++){
    cartTotalprice += totalPriceArray[arrayElement];
  }
  return cartTotalprice;
}

//user interface logic

$(document).ready(function(){
  $("form#btnsubmit").submit(function(event){
    event.preventDefault();
      var pizzaSizes = parseInt($("input[type=checkbox][name=pizza-size]:checked").val());
      var crusts = parseInt($("input[type=checkbox][name=crust]:checked").val());
      var toppings = parseInt($("input[type=checkbox][name=topping]:checked").val());
      var quantity = parseInt($("#quantity").val());
      var delivery = parseInt($("#delivery").val());


      var newOrder = new Order(pizzaSizes, crusts, toppings, quantity, delivery);


    $("ul#orders").append("<li><span class='list-orders'>" + newOrder.pizzaSize + totalPrice() + "</span></li> ");

    $("input[type=checkbox][name=pizza-size]:checked").val("");
    $("input[type=checkbox][name=crust]:checked").val("");
    $("input[type=checkbox][name=topping]:checked").val("");
    $("#quantity").val("");
    $("#delivery").val("");

  });
});
