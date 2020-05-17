
function Order(size, crust, topping, quantity, delivery) {
  this.pizzaSize = size;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
  this.delivery = delivery;
}

function Contacts(first, last, phoneNumber) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phoneNumber;

}

Contacts.prototype.fullInformation = function(){
  return this.firstName + ", " + this.lastName + ", " + this.phoneNumber + ": ";
}

Order.prototype.totalPrice = function(){
  return (this.pizzaSize + this.crust + this.topping) * this.quantity;
}

Order.prototype.fullOrder = function(){
  return this.pizzaSize + ", " + this.crust + ", " + this.topping + "," + this.quantity + "," + this.delivery;
}


function resetFields() {
  $("input#firstName").val("");
  $("input#lastName").val("");
  $("input#phoneNumber").val("");
  $("input[type=checkbox][name=pizza-size]:checked").val("").prop('checked', false);
  $("input[type=checkbox][name=crust]:checked").val("").prop('checked', false);
  $("input[type=checkbox][name=topping]:checked").val("").prop('checked', false);
  $("#quantity").val("");
  $("#delivery").val("");
}
//user interface logic

$(document).ready(function(){
  $("form#new-pizza").submit(function(event){
    event.preventDefault();
      var inputtedFirstName = $("input#firstName").val();
      var inputtedLastName = $("input#lastName").val();
      var inputtedPhoneNumber = $("input#phoneNumber").val();
      var pizzaSize = parseInt($("input[type=checkbox][name=pizza-size]:checked").val());
      var crusts = parseInt($("input[type=checkbox][name=crust]:checked").val());
      var toppings = parseInt($("input[type=checkbox][name=topping]:checked").val());
      var quantity = parseInt($("#quantity").val());
      var delivery = $("#delivery").val();
      if($("#delivery").val() === "Deliver"){
        alert('Delivery is 200/=');
        alert(prompt('Enter your location'));
        alert('Your order will be delivered to your location');
      } else {
        alert("You can pick up your order before closing hours");
      }

      var newContacts = new Contacts(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);


      var newOrder = new Order(pizzaSize, crusts, toppings, quantity, delivery);

    $(".display-content").show();
    $("ul#lists").append("<li><span class='list-orders'>" + newContacts.fullInformation() + newOrder.fullOrder() + ("  ||") +  ("Total is Ksh: ") + newOrder.totalPrice() + "</span></li> ");

    resetFields();

  });
});
