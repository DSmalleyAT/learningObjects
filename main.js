// let cake = {
//     flavor: 'chocolate',
//     isALie: true,
//     serves: 8,
//     ingredients: ['flour', 'egg', 'bakers chocolate']
// };
// console.log(cake.flavor + " cake");
// console.log('serves: ' + cake.serves);
// console.log('ingredients');
// console.log(cake.ingredients[0]);
// console.log(cake.ingredients[1]);
// console.log(cake.ingredients[2]);

let PipesCafe = {
    restaurantName: 'Pipes Cafe',
    town: 'Cardiff by the Sea',
    cuisine: 'breakfast burritos',
    visitedEver: true,
    visitedRecent: false
};

let BluewaterGrill = {
    restaurantName: 'Bluewater Grill',
    town: 'Carlsbad',
    cuisine: 'fish & chips',
    visitedEver: true,
    visitedRecent: true
};

let Subway = {
    restaurantName: 'Subway',
    town: 'Any Town of size',
    cuisine: 'sandwich',
    visitedEver: true,
    visitedRecent: true
};

let PhilsBBQ = {
    restaurantName: 'Phil\'s BBQ',
    town: 'Rancho Bernardo',
    cuisine: 'ribs',
    visitedEver: false,
    visitedRecent: false,
    
}

let restaurants = [PipesCafe, BluewaterGrill, PhilsBBQ] 

for (let index = 0; index < restaurants.length; index++) {
    let restCounted = restaurants[index];
    
    if (restCounted.visitedRecent == true) {
        console.log('I went to ' + restCounted.restaurantName + ' in ' + restCounted.town + ' recently, their ' + restCounted.cuisine + ' are pretty good');
    } else if (restCounted.visitedEver == true) {
        console.log('It\'s been a while since I went to ' + restCounted.restaurantName + ' in ' + restCounted.town + '. I rememeber liking their ' + restCounted.cuisine + '.');
    } else {
        console.log('I\'ve never been to ' + restCounted.restaurantName + ' in ' + restCounted.town + ', but I have heard good things about their ' + restCounted.cuisine + '.');
    }
}


