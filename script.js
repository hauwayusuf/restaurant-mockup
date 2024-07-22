// JavaScript code to interact with the form and demonstrate concepts
document.getElementById('order-form-submit').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Variables
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let delivery = document.getElementById('delivery').value;
  let payment = document.getElementById('payment').value;
  let order = document.getElementById('order').value;
  
  // Object
  let orderDetails = {
    name: name,
    phone: phone,
    delivery: delivery,
    payment: payment,
    order: order
  };
  
  // Function
  function displayOrderDetails() {
    console.log('Order details:');
    console.log('Name:', orderDetails.name);
    console.log('Phone:', orderDetails.phone);
    console.log('Delivery:', orderDetails.delivery);
    console.log('Payment:', orderDetails.payment);
    console.log('Order:', orderDetails.order);
  }
  
  // Array
  let menuItems = [
    { name: 'Rigatoni', price: 12.99 },
    { name: 'Penne', price: 10.99 },
    { name: 'Fettuccine', price: 11.99 },
    { name: 'Elbow Macaroni', price: 8.99 },
    { name: 'Rice and Stew', price: 14.99 },
    { name: 'Jollof Rice', price: 13.99 },
    { name: 'Fried Rice', price: 9.99 }
  ];
  
  // Loop
  console.log('Menu Items:');
  for (let item of menuItems) {
    console.log(item.name + ' - $' + item.price);
  }
  
  // Comparisons
  let totalPrice = 0;
  for (let item of menuItems) {
    if (order.includes(item.name)) {
      totalPrice += item.price;
    }
  }
  console.log('Total Price:', totalPrice);
  
  // Boolean
  let hasDelivery = delivery === 'delivery';
  console.log('Delivery Selected:', hasDelivery);
  
  // Calling the function to display order details
  displayOrderDetails();
  
  // Additional JavaScript interactions can be added here
});