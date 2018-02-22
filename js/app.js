'use strict';

MallPic.items = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
MallPic.allImages = [];

function MallPic(name) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
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

var orderForm = document.getElementById('order-form');



function clickHandler(event) {
  for (var i = 0; i < MallPic.items.length; i++) {
    if (event.target.alt === MallPic.allImages[i].name) {
      MallPic.allImages[i].clicks += 1;
      updateSalesArray();
    }
  }
  createListDisplay();
}




MallPic.dropDown.addEventListener('click', clickHandler);