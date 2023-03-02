const form = document.getElementById('addform');
const ul = document.getElementById('list-group');

form.addEventListener('submit', setToCloud)

window.addEventListener('DOMContentLoaded', ()=>{
    axios.get('https://crudcrud.com/api/c95262a9ece8492cb201d54cc2f77a67/orderDetails')
.then((res)=>{for(i in res.data){
    
    showOnScreen(res.data[i])

}})
})

function setToCloud(e){
    e.preventDefault();
    
    let Name = document.getElementById('name').value;
    let cost = document.getElementById('cost').value;
    let category = document.getElementById('Category').value;
    let data = {Name , cost , category};
    axios.post('https://crudcrud.com/api/c95262a9ece8492cb201d54cc2f77a67/orderDetails', data)
    .then((res)=> showOnScreen(res.data))
    .catch((err)=>console.log(err))
}
function showOnScreen(data){
    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.textContent = `${data.category} ==> ${data.Name} ==> ${data.cost} `
    
    const btn = document.createElement('button')
    btn.className = 'btn btn-dark float-right Delete'
    btn.appendChild(document.createTextNode('Delete'))
    
    btn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/c95262a9ece8492cb201d54cc2f77a67/orderDetails/${data._id}`)
        .then(ul.removeChild(li))
    }
    

    li.appendChild(btn)

    ul.appendChild(li)

}
