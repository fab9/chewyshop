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
            description: 'Bacon ipsum dolor amet incididunt swine shoulder mollit aute corned beef. Incididunt consequat bresaola labore ribeye salami et velit flank ullamco boudin proident in mollit ball tip. Labore ipsum in laboris pastrami veniam ex tail.'
        }, {
            title: 'Cat Thing',
            imageUrl: 'http://placehold.it/300x300',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Leberkas nostrud swine, biltong alcatra adipisicing dolore shank laboris anim. Filet mignon elit pancetta pork. Landjaeger tongue commodo, flank leberkas pastrami pig alcatra. Leberkas quis ham hock, in non drumstick chicken sed frankfurter tongue. Officia cillum rump magna.'
        }, {
            title: 'Dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Excepteur cillum ut, beef capicola ribeye labore biltong sed ground round pork chop proident strip steak short ribs id.'
        }, {
            title: 'Another Cat Thing',
            imageUrl: 'http://placehold.it/300x300',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Short ribs aliqua pork chop tenderloin shank. Biltong exercitation lorem leberkas drumstick, pork chop labore eu beef meatball tail ut deserunt cupim dolore. Minim drumstick officia, aliqua rump shank fugiat jerky andouille pastrami tempor esse.'
        }, {
            title: 'Another dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'In leberkas exercitation porchetta pork in esse drumstick sausage filet mignon pork loin meatloaf picanha pork chop consectetur. Voluptate drumstick short loin, cupidatat bacon ball tip ipsum brisket aliqua turkey jerky.'
        }, {
            title: 'One More Cat Thingie',
            imageUrl: 'http://placehold.it/300x300',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Shoulder turkey capicola tail, salami aliqua laborum reprehenderit labore. Bacon ad minim beef ribs pig, shoulder biltong. Pig t-bone cow drumstick, ad ham officia proident venison cillum enim andouille ground round doner.'
        }, {
            title: 'One more dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Dolor adipisicing andouille ut, in jerky ham consequat. Occaecat jerky dolor, ut ea venison elit consequat cupidatat ut laborum magna t-bone. Doner landjaeger alcatra cow short ribs.'
        }, {
            title: 'XXCat Thing',
            imageUrl: 'http://placehold.it/300x300',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Leberkas nostrud swine, biltong alcatra adipisicing dolore shank laboris anim. Filet mignon elit pancetta pork. Landjaeger tongue commodo, flank leberkas pastrami pig alcatra. Leberkas quis ham hock, in non drumstick chicken sed frankfurter tongue. Officia cillum rump magna.'
        }, {
            title: 'KKDog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Excepteur cillum ut, beef capicola ribeye labore biltong sed ground round pork chop proident strip steak short ribs id.'
        }, {
            title: 'FFAnother Cat Thing',
            imageUrl: 'http://placehold.it/300x300',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Short ribs aliqua pork chop tenderloin shank. Biltong exercitation lorem leberkas drumstick, pork chop labore eu beef meatball tail ut deserunt cupim dolore. Minim drumstick officia, aliqua rump shank fugiat jerky andouille pastrami tempor esse.'
        }, {
            title: 'JJAnother dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'In leberkas exercitation porchetta pork in esse drumstick sausage filet mignon pork loin meatloaf picanha pork chop consectetur. Voluptate drumstick short loin, cupidatat bacon ball tip ipsum brisket aliqua turkey jerky.'
        }, {
            title: 'PPOne More Cat Thingie',
            imageUrl: 'http://placehold.it/300x300',
            price: 5.97,
            stock: 100,
            categories: [cats],
            description: 'Shoulder turkey capicola tail, salami aliqua laborum reprehenderit labore. Bacon ad minim beef ribs pig, shoulder biltong. Pig t-bone cow drumstick, ad ham officia proident venison cillum enim andouille ground round doner.'
        }, {
            title: 'DDOne more dog thing',
            imageUrl: '/assets/uploads/beggingstrips.jpg',
            price: 9.34,
            stock: 100,
            categories: [dogs],
            description: 'Dolor adipisicing andouille ut, in jerky ham consequat. Occaecat jerky dolor, ut ea venison elit consequat cupidatat ut laborum magna t-bone. Doner landjaeger alcatra cow short ribs.'
        });
    })
    .then(function () {
        console.log('Finished populating Products with categories');
    })
    .then(null, function (err) {
        console.error('Error populating Products & categories: ', err);
    });