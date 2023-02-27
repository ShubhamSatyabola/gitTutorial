const posts = []

function updateLastUserActivityTIme(){
    return new Promise( (resolve, reject)=>{
        setTimeout( () =>{
            resolve(new Date().getTime())
        } ,1000)
    })
}

function createPost(post){
    return new Promise( (resolve, reject)=>{
        posts.push(post)
        resolve(post.title)
    })
}
function deletePost(){
    return new Promise( (resolve, reject)=>{
        posts.pop()
        resolve()
    })
}

Promise.all([createPost({title:'post1', body:'this is post1'}), updateLastUserActivityTIme()]).then((values)=>{
    console.log(values)
    deletePost().then(()=>Promise.all([createPost({title:'post2', body:'this is post2'}), updateLastUserActivityTIme()]).then((values)=>{
        console.log(values)
    }))
})
