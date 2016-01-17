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
        return Catalog.create({name: 'All'});
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
    .then(function () {
        return Product.create({
            title: 'Cat Cave',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-cave.jpg',
            price: 62.59,
            stock: 250,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Unicorn Horn for Horses',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/horse-unicorn-horn.jpg',
            price: 5.97,
            stock: 100,
            categories: [other],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Dog Toys Storage',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/dog-toys-burlap-storage.jpg',
            price: 99.34,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Breakaway Cat Collar',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-collar-breakaway.jpg',
            price: 8.00,
            stock: 100,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Personalized Mat',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/personalized-pet-mat.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Embossing Rolling Pin',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-embossing-rolling-pin.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Stitched Leather Collar',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/stitched-leather-collar.jpg',
            price: 9.24,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Cat Stickers',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-stickers.jpg',
            price: 7.97,
            stock: 100,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Personalized Scarves',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/personalized-scarves.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Heart Cat Tag',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-call-mom.jpg',
            price: 5.44,
            stock: 100,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Stoneware Urn',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/stoneware-pet-urn.jpg',
            price: 9.44,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Cat Prints',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-prints.jpg',
            price: 5.17,
            stock: 100,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Lost Tag',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/lost-tag.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Cat Feeder',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/cat-feeder.jpg',
            price: 4.97,
            stock: 100,
            categories: [cats],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        }, {
            title: 'Rope Dog Leash',
            imageUrl: 'https://s3.amazonaws.com/petshop-images/dog-rope-leash.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.'
        });
    })
    .then(function () {
        console.log('Finished populating Products with categories');
    })
    .then(null, function (err) {
        console.error('Error populating Products & categories: ', err);
    });