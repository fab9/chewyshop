'use strict';

angular.module('chewyshopApp')
    .factory('Product', function () {
        var last_id = 5;
        // Since server is not ready yet, use an array to hold the data.
        var example_products = [
            {
                _id: 1,
                title: 'Blue Buffalo',
                price: 29.99,
                quantity: 100,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus diam quis leo placerat dictum. Fusce turpis quam, ultrices ut porta sed, aliquam at elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla risus nunc, molestie at congue sit amet, congue a sem. Maecenas ut ipsum vel arcu cursus cursus. Mauris a pulvinar ligula. Fusce tincidunt tempus turpis non vestibulum. Vestibulum sed enim velit, non molestie enim. Pellentesque at mi ipsum, vitae pulvinar dolor. Nam tempus dictum iaculis. Vivamus eget eros id diam iaculis sollicitudin. '
            },
            {
                _id: 2,
                title: 'Product 2',
                price: 14.99,
                quantity: 10,
                description: 'Donec cursus diam quis leo placerat dictum. Fusce turpis quam, ultrices ut porta sed, aliquam at elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla risus nunc, molestie at congue sit amet, congue a sem. Maecenas ut ipsum vel arcu cursus cursus. Mauris a pulvinar ligula. Fusce tincidunt tempus turpis non vestibulum. Vestibulum sed enim velit, non molestie enim. Pellentesque at mi ipsum, vitae pulvinar dolor. Nam tempus dictum iaculis. Vivamus eget eros id diam iaculis sollicitudin. '
            },
            {_id: 3, title: 'Product 3', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
            {_id: 4, title: 'Product 4', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
            {_id: 5, title: 'Greenies', price: 19.99, quantity: 10, description: 'Lorem ipsum dolor sit amet'}
        ];

        return {
            query: function(){
                return example_products;
            },

            get: function(params){
                var result = {};
                angular.forEach(example_products, function (product) {
                    if(product._id == parseInt(params.id))
                        return this.product = product;
                }, result);
                return result.product;
            },

            delete: function(params){
                angular.forEach(example_products, function (product, index) {
                    if(product._id === params._id){
                        console.log(product, index);
                        example_products.splice(index, 1);
                        return;
                    }
                });
            },

            create: function(product){
                product.id = ++last_id;
                example_products.push(product);
            },

            update: function(product){
                var item = this.get(product);
                if(!item) return false;

                item.title = product.title;
                item.price = product.price;
                item.quantity = product.quantity;
                item.description = product.description;
                return true
            }
        };
    });

