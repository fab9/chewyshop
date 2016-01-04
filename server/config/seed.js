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
            title: 'Fat Cat',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 2.59,
            stock: 250,
            categories: [cats],
            description: 'The perfect bite-sized toy, Appeteasers will make every hour Happy Hour! Get ‘em while they’re hot!'
        }, {
            title: 'Light Up Christmas Tree Sweater',
            imageUrl: '/assets/uploads/holiday-sweater.jpg',
            price: 5.97,
            stock: 100,
            categories: [other],
            description: 'Let your dog steal the show at Christmas this year with the Pet Holiday Christmas Tree Star Sweater.'
        }, {
            title: 'Begging Strips',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Bacon ipsum dolor amet adipisicing adipisicing incididunt swine adipisicing shoulder mollit aute corned beef.'
        }, {
            title: 'Cat Thing',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Leberkas nostrud swine, biltong adipisicing adipisicing alcatra adipisicing dolore shank laboris anim.'
        }, {
            title: 'Dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Excepteur cillum ut, beef capicola ribeye labore biltong sed ground round pork chop proident strip steak short ribs id.'
        }, {
            title: 'Another Cat Thing',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Short ribs aliqua pork chop tenderloin shank.'
        }, {
            title: 'Another dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'In leberkas exercitation porchetta pork in esse drumstick saus meatloaf picanha pork chop consectetur.'
        }, {
            title: 'One More Cat Thingie',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Shoulder turkey capicola tail, salami aliqua laborum reprehenderit labore.'
        }, {
            title: 'One more dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Dolor adipisicing andouille ut, in jerky ham consequat.'
        }, {
            title: 'XXCat Thing',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Leberkas nostrud swine, biltong alcatra adipisicing dolore shank laboris anim.'
        }, {
            title: 'KKDog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Excepteur cillum ut, beef capicola ribeye labore oident strip steak short ribs id.'
        }, {
            title: 'FFAnother Cat Thing',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Short ribs aliqua pork chop tenderloin shank. Minim drumstick officia, aliqandouille pastrami tempor esse.'
        }, {
            title: 'JJAnother dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'In leberkas exercitation  consectetur. Voluptate drumstick short loin, cupidatat bacot aliqua turkey jerky.'
        }, {
            title: 'Yet Another Cat Thingie',
            imageUrl: '/assets/uploads/appeteasers.jpg',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Shoulder turkey capicola tail, labore. Bacon alder biltong. Pig t-bone und round doner.'
        }, {
            title: 'DDOne more dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Dolor adipisicing andouille ut, in jerky ham consequat. Doner landjaeger alcatra cow short ribs.'
        });
    })
    .then(function () {
        console.log('Finished populating Products with categories');
    })
    .then(null, function (err) {
        console.error('Error populating Products & categories: ', err);
    });