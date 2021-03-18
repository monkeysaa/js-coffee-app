"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};

// Add to Cart
// // jQuery for reference
// $('.add-to-order').on('click', () => {
//   addItemToCart('Coffee');
//   incrementCartTotal(1.50);
//   }
// );

document.querySelector('.add-to-order').addEventListener('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
  }
);



// Place Order
// jQuery: coffeeSold = $('#cart-items').children().length
// JS: coffeeSold = document.getElementById('cart-items').children.length

// $('#place-order').on('click', () => {
//   incrementCoffeeSold($('#cart-items').children().length);
//   resetCart();
//   }
// );

document.querySelector('#place-order').addEventListener('click', () => {
  incrementCoffeeSold(document.getElementById('cart-items').children.length);
  resetCart();
  }
);










