'use strict';

angular.module('chewyshopApp')
    .factory('Product', function ($resource) {
        return $resource('/api/products/:id', null, {
            'update': { method: 'PUT'}
        });
    });
