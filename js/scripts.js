function Order(pizzaSize, crust, topping, quantity, delivery) {
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
  this.delivery = delivery;
}
 

//user interface logic

$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();

    var pizzaSizes = parseInt($("input[type=checkbox][name=pizza-size]:checked").val());
    var crusts = parseInt($("input[type=checkbox][name=crust]:checked").val());
    var toppings = parseInt($("input[type=checkbox][name=topping]:checked").val());
    var quantity = parseInt($("#quantity").val());
    var delivery = parseInt($("#delivery").val());

  });
});
