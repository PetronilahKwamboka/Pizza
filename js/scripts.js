
function Order(size, crust, topping, quantity, delivery) {
  this.pizzaSize = size;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
  this.delivery = delivery;
}

Order.prototype.totalPrice = function(){
  return (this.pizzaSize + this.topping) * this.quantity;
}

Order.prototype.fullOrder = function(){
  return this.pizzaSize + ", " + this.crust + ", " + this.topping + "," + this.quantity + "," + this.delivery;
}


//user interface logic

$(document).ready(function(){
  $("form#new-pizza").submit(function(event){
    event.preventDefault();
      var pizzaSize = parseInt($("input[type=checkbox][name=pizza-size]:checked").val());
      var crusts = parseInt($("input[type=checkbox][name=crust]:checked").val());
      var toppings = parseInt($("input[type=checkbox][name=topping]:checked").val());
      var quantity = parseInt($("#quantity").val());
      var delivery = $("#delivery").val();
      if(delivery.selected === "Deliver"){
        alert('Enter location:');
      } else {
        alert("Your order is ready for pick-up");
      }


      var newOrder = new Order(pizzaSize, crusts, toppings, quantity, delivery);

    $(".display-content").show();
    $("ul#lists").append("<li><span class='list-orders'>" + newOrder.fullOrder() + ("  ||") +  ("Total is: ") + newOrder.totalPrice() + "</span></li> ");

    $("input[type=checkbox][name=pizza-size]:checked").val("").prop('checked', false);
    $("input[type=checkbox][name=crust]:checked").val("").prop('checked', false);
    $("input[type=checkbox][name=topping]:checked").val("").prop('checked', false);
    $("#quantity").val("");
    $("#delivery").val("");

  });
});
