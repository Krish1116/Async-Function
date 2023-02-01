// console.log('krish: shows ticket');
// console.log('vikky: shows ticket');

// const bringTicket = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('ticket');
//     }, 3000);
// })

// const getPopcoren = bringTicket.then((t) => {
//     // console.log(`Harsh: shows ${t}`);
//     console.log('krish: i have ticket')
//     console.log('vikky: we should go in ');
//     console.log('krish: no i am hungry');

//     return new Promise((res, rej) => res(`${t} popcorn`))
// })
// const getButter = getPopcoren.then((t) => {
//     console.log('vikky: i got some popcorn')
//     console.log('vikky: we should go in ');
//     console.log('krish: no i need butter on my popcorn');

//     return new Promise((res, rej) => res(`${t} butter`))
// })
// // getPopcoren.then((t) => console.log(t));
// getButter.then((t) => console.log(t));
// console.log('prince: shows ticket');
// console.log('arati: shows ticket');

//so the code looks ugly so here comes await function

console.log('krish: shows ticket');
console.log('vikky: shows ticket');
console.log('prince: shows ticket');
console.log('arati: shows ticket');

const preMovie = async () => {

    const bringTicket = new Promise((res, rej) => {
        setTimeout(() => res("ticket"), 3000)
    })

    const getPopcoren = new Promise((res, rej) => res(`popcorn`));
    
    const addCandy = new Promise((res, rej) => res(`Candy`));

    const getColdDrinks = new Promise((res, rej) => res(`Cold-Drink`));
    let ticket = await bringTicket;

    // console.log(`krish: i have ticket ${ticket}`)
    // console.log('vikky: we should go in ');
    // console.log('krish: no i am hungry');

    // let popcorn = await getPopcoren;

    // console.log(`vikky: i got some ${popcorn}`)
    // console.log('vikky: we should go in ');
    // console.log('krish: no i need butter on my popcorn');

    // let butter = await addButter;

    // console.log(`vikky: i got some ${butter} on popcorn`);
    // console.log(`vikky: anything else?`);

    // let coldDrink = await getColdDrinks;
    // console.log(`krish: yes, I need some Cold-Drink also`);
    // console.log(`vikky: i take ${coldDrink} for you Dear :)`) 
    // console.log(`krish: lets go we are getting late`);
    // console.log(`vikky: thank you for reminder`)

    let [popcorn, Candy, coldDrink]= await Promise.all([getPopcoren, addCandy, getColdDrinks]);

    console.log(`${popcorn}, ${Candy}, ${coldDrink}`);
    return ticket
}

preMovie().then((m) => console.log(`ticketcheker: shows your ${m}`));