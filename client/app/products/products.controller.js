'use strict';

angular.module('chewyshopApp')
    // Inject our `Products` factory into the controller.
    .controller('ProductsCtrl', function ($scope, Products) {
        // Create new variable `$scope.products` so that `products` become available in the view as well.
        $scope.products = Products;
    });
