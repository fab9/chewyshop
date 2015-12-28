'use strict';

angular.module('chewyshopApp')
    // Inject our `Products` factory into the controller.
    .controller('ProductsCtrl', function ($scope, Product) {
        // Create new variable `$scope.products` so that `products` become available in the view as well.
        $scope.products = Product.query();
    })

    /*
     * We are injecting new dependencies besides the $scope and Products service,
     * such as $state and $stateParams. The first one allows us to redirect to a different
     * state or route, while $stateParams is an object that contains all the variables
     * from the URL (for example, product id).
     */

    .controller('ProductViewCtrl', function ($scope, $state, $stateParams, Product) {
        $scope.product = Product.get({id: $stateParams.id});

        $scope.deleteProduct = function () {
            Products.delete($scope.product);
            $state.go('products');
        }
    })

    .controller('ProductNewCtrl', function ($scope, $state, Product) {
        $scope.product = {}; // create a new instance
        $scope.addProduct = function (product) {
            Product.create($scope.product);
            $state.go('products');
        }
    })

    .controller('ProductEditCtrl', function ($scope, $state, $stateParams, Product) {
        $scope.product = Product.get({id: $stateParams.id});

        $scope.editProduct = function (product) {
            Product.update($scope.product);
            $state.go('products');
        }
    });
