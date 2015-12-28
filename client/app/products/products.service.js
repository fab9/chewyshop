'use strict';

angular.module('chewyshopApp')
    .factory('Product', function ($resource) {
        return $resource('/api/products/:id', null, {
            // Added the update action, because the default actions do not include it.
            'update': { method: 'PUT'}
        });
    });
