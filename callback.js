 const post = [
    {title : 'Post One', body: 'This is post one', createAt: new Date().getTime()},
    {title : 'Post Two', body: 'This is post Two', createAt: new Date().getTime()}
 ];

 let intervalId = 0;
 function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
    let output = '';
    for(let i = 0; i < post.length; i++){
        output += `<li>${post[i].title}</li> - last updated ${(new Date().getTime() - post[i].createAt) / 1000} second ago`;
    }
    document.body.innerHTML = output;
    }, 1000);
 }
 getPosts();

 function createPost(posts, callback) {
    setTimeout(() => {
        post.push({...posts, createAt: new Date().getTime()})
        callback();
    },2000)
 }

 createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

 function create4thPost(posts, callback) {
    setTimeout(() => {
        post.push({...posts, createAt: new Date().getTime()})
        callback();
    },6000)
 }

 create4thPost({title: 'Post Four', body: 'This is Post Four'}, getPosts);
