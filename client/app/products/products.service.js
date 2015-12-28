'use strict';

angular.module('chewyshopApp')
  .factory('Product', function () {
      // Since server is not ready yet, use an array to hold the data.
      return [
          {_id: 1, title: 'Blue Buffalo', price: 29.99, quantity: 100, description: 'Lorem ipsum dolor sit amet'},
          {_id: 2, title: 'Product 2', price: 14.99, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
          {_id: 3, title: 'Product 3', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
          {_id: 4, title: 'Product 4', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
          {_id: 5, title: 'Greenies', price: 19.99, quantity: 10, description: 'Lorem ipsum dolor sit amet'}
      ];
  });
