//Notes at bottom
'use strict';

MallPic.items = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
MallPic.allImages = [];

var orderForm = document.getElementById('order-form');
var clearCart = document.getElementById('clearCart');
var addToCart = document.getElementById('addToCart');
var allOrderData = [];
var cartList = document.getElementById('cartList');

function MallPic(name) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0; //in this version it is the selection property for adding to cart
  MallPic.allImages.push(this);
}

for (var i = 0; i < MallPic.items.length; i++) {
  new MallPic(MallPic.items[i]);
}

MallPic.dropDown = document.getElementById('product-drop-down');

for (var i = 0; i < 20; i++) {
  var opt = document.createElement('option');
  opt.value = opt.text = MallPic.allImages[i].name + ' costs ' + ' $money ';
  MallPic.dropDown.add(opt);
}

orderForm.addEventListener('addToCart', addToCartHandler);

function addToCartHandler(event) {
  event.preventDefault();
  if (!event.target.prodAmount.value || !event.target.userName.value || !event.target.address.value || !event.target.city.value || !event.target.zipCode.value) {
    return alert('Please complete ALL fields before continuing.');
  }
  var prodAmount = event.target.prodAmount.value; 
  var userName = event.target.userName.value;
  var address = event.target.address.value;
  var city = event.target.city.value;
  var zipCode = event.target.zipCode.value;
  allOrderData.push(prodAmount, userName, address, city, zipCode);
  localStorage.allOrderData = JSON.stringify(allOrderData);
}

orderForm.addEventListener('clearCart', function() {
  var prodAmount = document.getElementById('prodAmount');
  var userName = document.getElementById('userName');
  var address = document.getElementById('address');
  var city = document.getElementById('city');
  var zipCode = document.getElementById('zipCode');
  prodAmount.value = '';
  userNname.value = '';
  address.value = '';
  city.value = '';
  zipCode.value = '';
  allOrderData = [];
});

function createCartList() {
  if (localStorage.allOrderData) {
  console.log('found localStorage');
  allOrderData = JSON.parse(localStorage.allOrderData);
  for (var i = 0; i < allOrderData.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allOrderData[i];
    }
  }
}

/* Other strategies I am considering trying:
Use MallPic.allImages array so that each selection that is done with addToCart pops off the item with an event, and then that puts it on the local storage to be used by list.
Otherwise I'm thinking of using the click logic from the main MallBus js, but that seems like it may be over burdensome for this script. 
May be trying to do too much with pushing into allOrderData.
*/