/*console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  const getColdDrinks =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('colddrinks'), 3000);
});

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);

  let colddrinks = await getColdDrinks;
  console.log(`get ${colddrinks}`)
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');
console.log('person5 shows ticket');*/

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
async function task(){
   let [post1,updatetime] = await Promise.all([createPost({title:'post1', body:'this is post1'}), updateLastUserActivityTIme()])
   console.log(`${post1},${updatetime}`)
   let deletepost = await deletePost
   deletepost()
   let [post2,updatetime2] = await Promise.all([createPost({title:'post2', body:'this is post2'}), updateLastUserActivityTIme()])
    console.log(`${post2},${updatetime2}`)
}
task()