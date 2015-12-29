/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');

User.find({}).removeAsync()
    .then(function () {
        User.createAsync({
                provider: 'local',
                name: 'Test User',
                email: 'test@test.com',
                password: 'test'
            }, {
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@admin.com',
                password: 'admin'
            })
            .then(function () {
                console.log('finished populating users');
            });
    });

Product.find({}).removeAsync()
    .then(function () {
        Product.createAsync({
                title: 'Milkbone',
                imageUrl: '/assets/uploads/milkbone.jpg',
                price: 25,
                stock: 250,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
            }, {
                title: 'Begging Strips',
                imageUrl: '/assets/uploads/beggingstrips.jpg',
                price: 15,
                stock: 100,
                description: 'Another description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
            }, {
                title: 'Checkups',
                imageUrl: '/assets/uploads/checkups.jpg',
                price: 8,
                stock: 50,
                description: 'Third Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
            })
            .then(function () {
                console.log('finished populating products');
            });
    });