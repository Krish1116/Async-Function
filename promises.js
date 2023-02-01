const posts = [
    {title: 'Post One', body: 'This is post One', createAt: '14 Fab'},
    {title: 'Post two', body: 'This is post two', createAt: '15 Fab'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        for(let i = 0; i < posts.length; i++){
            output += `<li>${posts[i].title} - ${posts[i].createAt}</li>`;
        }
        document.body.innerHTML = output;
    }, 1000);
}
function deletePost() {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                resolve(posts.pop());
            }else{
                reject('Array is empty now');
            }
        },1000)
    })
}

function createPost(post, post4){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post, {...post4});

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },2000);
    })
}


// createPost({title: 'Post three', body: 'This is post three', createAt: "14 Fab"}, {title: 'Post four', body: 'This is post four', createAt: '17 Fab'} ).then(() => {
//     getPosts()
//     deletePost().then(() => {
//         getPosts()
//         deletePost().then(() => {
//             getPosts()
//             deletePost().then(() => {
//                 getPosts()
//                 deletePost().then(() => {
//                     getPosts()
//                     deletePost().then(() => {})
//                     .catch((err) => {
//                         console.log('Inside catch block', err);
//                     })
//                 })
//             })
//         })
//     })
// });

lastActivityUpdate  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            createPost.creatAt = new Date().getTime();
            resolve(createPost.creatAt)
        },1000)
    })
}

//promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Good Bye');
//   });

//   Promise.all([promise1, promise2, promise3]).then(values => console.log(values));