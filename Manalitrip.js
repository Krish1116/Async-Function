// function buycar(cb, cb1, cb2) {
//   setTimeout(() => {
//     console.log('buy a car');
//     cb(cb1, cb2);
//   }, 10000)
// }

// function plantrip(cb, cb1) {
//   setTimeout(() => {
//     console.log('lets go to manali');
//     cb(cb1);
//   }, 2000)
// }

// function reachmanali(cb){
//   setTimeout(() => {
//     console.log('reached manali');
//     cb();
//   },1000)
// }

// function reachmountain(){
//   setTimeout(() => {
//     console.log('reach famous mountain');
//   }, 1000);
// }
// buycar(plantrip, reachmanali, reachmountain);

//whenever you add new function so you can face many stuff like your code is not readable and there have many callback created if you have lot's of things to do add so that's a big problem

function buycar() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('buy a car');
    }, 10000)
  })
}

function plantrip() {
  return new Promise((res, rej) => {
    
  setTimeout(() => {
    res('lets go to manali');
  }, 2000)
  })
}

function reachmanali() {
  return new Promise((res, rej) => {
    
  setTimeout(() => {
    res('reached manali');
  }, 1000)
  })
}

function reachmountain() {
  return new Promise((res, rej) => {   
  setTimeout(() => {
    res('reach famous mountain');
    // rej('Error: some accident happened')
  }, 1000);
  })
}
// buycar().then((msg) => {
//   console.log(msg)
//   plantrip().then((msg2) => {
//     console.log(msg2)
//     reachmanali().then((msg3) => {
//       console.log(msg3)
//       reachmountain().then((msg4) => {
//         console.log(msg4)
//       })
//     })
//   })
// });

//Now i am too lazy to write  this much code soin this situation async await comes


async function func(){
  const msg = await buycar();
  console.log(msg);
  const msg2 = await plantrip();
  console.log(msg2);
  const msg3 = await reachmanali();
  console.log(msg3);
  const msg4 = await reachmountain();
  console.log(msg4);
}
