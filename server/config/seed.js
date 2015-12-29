/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, dogs, cats, other;

User
    .find({})
    .removeAsync()
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

Catalog
    .find({})
    .remove()
    .then(function () {
        return Catalog.create({ name: 'All'});
    })
    .then(function (catalog) {
        mainCatalog = catalog;
        return mainCatalog.addChild({name: 'Dogs'});
    })
    .then(function (category) {
        dogs = category._id;
        return mainCatalog.addChild({name: 'Cats'});
    })
    .then(function (category) {
        cats = category._id;
        return mainCatalog.addChild({name: 'Other'});
    })
    .then(function (category) {
        other = category._id;
        return Product.find({}).remove({});
    })
    .then(function() {
        return Product.create({
            title: 'Fat Cat',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 2.59,
            stock: 250,
            categories: [cats],
            description: 'The perfect bite-sized toy, Appeteasers will make every hour Happy Hour! Just the right size for airborne fun… kitties just can’t get enough of them. Get ‘em while they’re hot!'
        }, {
            title: 'Light Up Christmas Tree Sweater',
            imageUrl: '/assets/uploads/holiday-sweater.jpg',
            price: 5.97,
            stock: 100,
            categories: [other],
            description: 'Let your dog steal the show at Christmas this year with the Top Paw PetHoliday Light Up Christmas Tree Star Sweater. This sweater is alive with the colors of the holiday, and features a beautiful Christmas tree with a stylish star on top.'
        }, {
            title: 'Begging Strips',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Made with real bacon, these mouthwatering treats have a smoky, sizzling scent and a savory, meaty taste that dogs go wild for. Soft, chewy, delicious and easy to break apart, Beggin’ Strips provide a fun treat for dogs of all sizes.'
        });
    })
    .then(function () {
        console.log('Finished populating Products with categories');
    })
    .then(null, function (err) {
        console.error('Error populating Products & categories: ', err);
    });