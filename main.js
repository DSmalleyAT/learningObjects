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

let restaurants = [PipesCafe, BluewaterGrill, Subway, PhilsBBQ] 

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

if (restaurantName = "Subway") {
    console.log('People be like \"Subway sucks.\" My Brother in XC, YOU made the ' + cuisine + '!');
} else if (visitedRecent = true) {
    console.log('I went to ' + restaurantName + ' in ' + town + ' recently, their ' + cuisine + ' are pretty good');
} else if (visitedEver = true) {
    console.log('It\'s been a while since I went to ' + restaurantName + ' in ' + town + '. I rememeber liking their ' + cuisine + '.');
} else {
    console.log('I\'ve never been to ' + restaurantName + ' in ' + town + ', but I have heard good things about their ' + cuisine + '.');
}